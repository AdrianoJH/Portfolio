"use client";

import { useTranslation } from "@/context/LanguageContext";
import { experience } from "@/lib/content/experience";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { List, Item, Period, Content, Company, Role, Desc } from "./styles";

export function Experience() {
  const { t, locale } = useTranslation();

  return (
    <Section id="experiencia" alt>
      <SectionTitle
        eyebrow={t.nav.experience}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />
      <List>
        {experience.map((item) => (
          <Item key={item.company}>
            <Period>
              {item.start} — {item.end ?? t.experience.present}
            </Period>
            <Content>
              <Company>{item.company}</Company>
              <Role>{item.role[locale]}</Role>
              <Desc>{item.description[locale]}</Desc>
            </Content>
          </Item>
        ))}
      </List>
    </Section>
  );
}
