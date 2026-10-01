import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Porta do antigo backend Flask: recebe o formulário e envia por SMTP (Outlook/Office365).
// Credenciais vêm de variáveis de ambiente (ver .env.example).
export async function POST(request: Request) {
  try {
    const { nome, email, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: "Serviço de e-mail não configurado." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: false, // STARTTLS na 587
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: SMTP_USER,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email,
      subject: `${nome} te enviou uma mensagem pelo Portfólio`,
      text: `${nome} (${email}) enviou:\n\n${mensagem}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] falha ao enviar:", error);
    return NextResponse.json({ error: "Falha ao enviar a mensagem." }, { status: 500 });
  }
}
