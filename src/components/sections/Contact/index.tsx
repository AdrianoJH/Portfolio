"use client";

import { useState, type FormEvent } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { profile, whatsappLink, emailLink } from "@/lib/content/profile";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { MailIcon, WhatsappIcon, LinkedinIcon, MapPinIcon } from "@/components/ui/Icons";
import {
  Grid,
  Channels,
  Channel,
  Form,
  Row,
  Field,
  Input,
  Textarea,
  Status,
} from "./styles";

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { t } = useTranslation();
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  const channels = [
    { icon: <MailIcon />, label: t.contact.title, value: profile.email, href: emailLink },
    { icon: <WhatsappIcon />, label: "WhatsApp", value: profile.phoneDisplay, href: whatsappLink },
    { icon: <LinkedinIcon />, label: "LinkedIn", value: "/adrianorodrigues-devfullstack", href: profile.linkedin },
    { icon: <MapPinIcon />, label: t.contact.location, value: t.about.values.location, href: whatsappLink },
  ];

  return (
    <Section id="contato">
      <SectionTitle
        eyebrow={t.nav.contact}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        align="center"
      />
      <Grid>
        <Channels>
          {channels.map((c) => (
            <Channel key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
              <span className="icon">{c.icon}</span>
              <div>
                <strong>{c.label}</strong>
                <span>{c.value}</span>
              </div>
            </Channel>
          ))}
        </Channels>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Field>
              {t.contact.name}
              <Input name="nome" required placeholder={t.contact.namePlaceholder} />
            </Field>
            <Field>
              {t.contact.email}
              <Input type="email" name="email" required placeholder={t.contact.emailPlaceholder} />
            </Field>
          </Row>
          <Field>
            {t.contact.message}
            <Textarea name="mensagem" required placeholder={t.contact.messagePlaceholder} />
          </Field>

          <Button type="submit" size="lg" disabled={state === "sending"}>
            {state === "sending" ? t.contact.sending : t.contact.send}
          </Button>

          {state === "success" && <Status $type="success">{t.contact.success}</Status>}
          {state === "error" && <Status $type="error">{t.contact.error}</Status>}
        </Form>
      </Grid>
    </Section>
  );
}
