import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();
const CONTACT_TO = "josephwu90@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.post("/api/contact", async (c) => {
  let body: ContactBody;

  try {
    body = await c.req.json();
  } catch {
    return c.json({ ok: false, error: "Send your name, email, and message." }, 400);
  }

  if (typeof body.company === "string" && body.company.trim()) {
    return c.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    !name ||
    !email ||
    !message ||
    !emailPattern.test(email) ||
    name.length > 120 ||
    email.length > 254 ||
    message.length > 5000
  ) {
    return c.json({ ok: false, error: "Add your name, a valid email, and a message." }, 400);
  }

  const origin = c.req.header("Origin") || c.req.header("Referer") || "";
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(origin ? { Origin: origin, Referer: origin } : {}),
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _captcha: "false",
      _replyto: email,
      _subject: `Portfolio inquiry from ${name}`,
      _template: "table",
    }),
  });

  const result = (await response.json().catch(() => null)) as {
    message?: string;
    success?: boolean | string;
  } | null;

  const accepted = response.ok && result?.success !== false && result?.success !== "false";

  if (!accepted) {
    return c.json(
      {
        ok: false,
        error: "The message could not be sent. Email josephwu90@gmail.com or try again.",
      },
      502,
    );
  }

  return c.json({ ok: true });
});

export default app;
