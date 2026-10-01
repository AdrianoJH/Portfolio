"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { ThemeToggle } from "../ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";
import {
  Bar,
  Inner,
  Logo,
  Nav,
  NavLink,
  Actions,
  MobileToggle,
  MobilePanel,
  MobileNavList,
} from "./styles";

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "sobre", label: t.nav.about },
    { id: "habilidades", label: t.nav.skills },
    { id: "experiencia", label: t.nav.experience },
    { id: "projetos", label: t.nav.projects },
    { id: "contato", label: t.nav.contact },
  ];

  return (
    <Bar $scrolled={scrolled}>
      <Inner>
        <Logo href="/#inicio">
          Adriano<span>.</span>
        </Logo>

        <Nav aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.id} href={`/#${l.id}`}>
              {l.label}
            </NavLink>
          ))}
        </Nav>

        <Actions>
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileToggle
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </MobileToggle>
        </Actions>
      </Inner>

      <MobilePanel $open={open}>
        <MobileNavList>
          {links.map((l) => (
            <li key={l.id}>
              <NavLink href={`/#${l.id}`} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </MobileNavList>
      </MobilePanel>
    </Bar>
  );
}
