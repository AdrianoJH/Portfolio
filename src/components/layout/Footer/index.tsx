"use client";

import { useTranslation } from "@/context/LanguageContext";
import { profile, whatsappLink, emailLink } from "@/lib/content/profile";
import { IconButton } from "@/components/ui/IconButton";
import { GithubIcon, LinkedinIcon, WhatsappIcon, MailIcon } from "@/components/ui/Icons";
import { FooterBar, Inner, Info, Socials } from "./styles";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <FooterBar>
      <Inner>
        <Info>
          <strong>{profile.shortName}</strong>
          <span>
            © {year} · {t.footer.rights}
          </span>
          <span>{t.footer.madeWith}</span>
        </Info>

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
      </Inner>
    </FooterBar>
  );
}
