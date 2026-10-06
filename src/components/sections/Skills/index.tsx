"use client";

import { useTranslation } from "@/context/LanguageContext";
import { skillCategories } from "@/lib/content/skills";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Grid, Group, GroupTitle, Pills, Pill } from "./styles";

export function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="habilidades">
      <SectionTitle
        eyebrow={t.nav.skills}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />
      <Grid>
        {skillCategories.map((category) => (
          <Group key={category.key}>
            <GroupTitle>{t.skills.categories[category.key]}</GroupTitle>
            <Pills>
              {category.items.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </Pills>
          </Group>
        ))}
      </Grid>
    </Section>
  );
}
