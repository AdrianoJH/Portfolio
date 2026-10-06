"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { profile, whatsappLink, emailLink } from "@/lib/content/profile";
import { IconButton } from "@/components/ui/IconButton";
import { GithubIcon, LinkedinIcon, WhatsappIcon, MailIcon } from "@/components/ui/Icons";
import { FooterBar, Inner, Top, Brand, Col, NavList, Socials, Bottom } from "./styles";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    { id: "sobre", label: t.nav.about },
    { id: "habilidades", label: t.nav.skills },
    { id: "experiencia", label: t.nav.experience },
    { id: "projetos", label: t.nav.projects },
    { id: "contato", label: t.nav.contact },
  ];

  return (
    <FooterBar>
      <Inner>
        <Top>
          <Brand>
            <strong>
              {profile.shortName}
              <span>.</span>
            </strong>
            <p>{t.hero.role}</p>
          </Brand>

          <Col>
            <h4>{t.footer.navTitle}</h4>
            <NavList>
              {links.map((l) => (
                <li key={l.id}>
                  <Link href={`/#${l.id}`}>{l.label}</Link>
                </li>
              ))}
            </NavList>
          </Col>

          <Col>
            <h4>{t.footer.connectTitle}</h4>
            <Socials>
              <IconButton as="a" href={profile.github} target="_blank" rel="noopener noreferrer" label="GitHub">
                <GithubIcon />
              </IconButton>
              <IconButton as="a" href={profile.linkedin} target="_blank" rel="noopener noreferrer" label="LinkedIn">
                <LinkedinIcon />
              </IconButton>
              <IconButton as="a" href={whatsappLink} target="_blank" rel="noopener noreferrer" label="WhatsApp">
                <WhatsappIcon />
              </IconButton>
              <IconButton as="a" href={emailLink} label="E-mail">
                <MailIcon />
              </IconButton>
            </Socials>
          </Col>
        </Top>

        <Bottom>
          <span>
            © {year} {profile.shortName} · {t.footer.rights}
          </span>
          <span>{t.footer.madeWith}</span>
        </Bottom>
      </Inner>
    </FooterBar>
  );
}
