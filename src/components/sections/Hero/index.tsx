"use client";

import { useTranslation } from "@/context/LanguageContext";
import { profile } from "@/lib/content/profile";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, ArrowDownIcon, DownloadIcon } from "@/components/ui/Icons";
import {
  HeroSection,
  Inner,
  Content,
  Badge,
  Name,
  Role,
  Line,
  Ctas,
  PortraitWrap,
  Portrait,
  Scroll,
} from "./styles";

export function Hero() {
  const { t } = useTranslation();

  return (
    <HeroSection id="inicio">
      <Inner>
        <Content>
          <Badge>
            <i aria-hidden="true" />
            {t.hero.available}
          </Badge>
          <Name>{profile.shortName}</Name>
          <Role>{t.hero.role}</Role>
          <Line>{t.hero.line}</Line>
          <Ctas>
            <Button as="a" href="#projetos" size="lg">
              {t.hero.ctaProjects}
              <ArrowRightIcon />
            </Button>
            <Button as="a" href="#contato" variant="outline" size="lg">
              {t.hero.ctaContact}
            </Button>
            <Button
              as="a"
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
            >
              <DownloadIcon />
              CV
            </Button>
          </Ctas>
        </Content>

        <PortraitWrap>
          <Portrait>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/perfil.png" alt={profile.name} />
          </Portrait>
        </PortraitWrap>
      </Inner>

      <Scroll href="#sobre" aria-label={t.hero.scroll}>
        <ArrowDownIcon />
        {t.hero.scroll}
      </Scroll>
    </HeroSection>
  );
}
