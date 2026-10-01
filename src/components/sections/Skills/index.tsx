"use client";

import { useTranslation } from "@/context/LanguageContext";
import { skillCategories } from "@/lib/content/skills";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Grid, CategoryCard, CatTitle, TagList } from "./styles";

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
          <Card key={category.key}>
            <CategoryCard>
              <CatTitle>{t.skills.categories[category.key]}</CatTitle>
              <TagList>
                {category.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </TagList>
            </CategoryCard>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
