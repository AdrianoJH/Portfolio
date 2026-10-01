"use client";

import { useTranslation } from "@/context/LanguageContext";
import { experience } from "@/lib/content/experience";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline, Item, Period, Company, Role, Desc } from "./styles";

export function Experience() {
  const { t, locale } = useTranslation();

  return (
    <Section id="experiencia" alt>
      <SectionTitle
        eyebrow={t.nav.experience}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
        align="center"
      />
      <Timeline>
        {experience.map((item) => (
          <Item key={item.company}>
            <Period>
              {item.start} — {item.end ?? t.experience.present}
            </Period>
            <Company>{item.company}</Company>
            <Role>{item.role[locale]}</Role>
            <Desc>{item.description[locale]}</Desc>
          </Item>
        ))}
      </Timeline>
    </Section>
  );
}
