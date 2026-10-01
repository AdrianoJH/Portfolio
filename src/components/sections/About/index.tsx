"use client";

import { useTranslation } from "@/context/LanguageContext";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MapPinIcon, CodeIcon, ArrowRightIcon, MailIcon } from "@/components/ui/Icons";
import { Grid, Portrait, Text, InfoGrid, InfoItem } from "./styles";

export function About() {
  const { t } = useTranslation();

  const info = [
    { icon: <MapPinIcon />, label: t.about.labels.location, value: t.about.values.location },
    { icon: <CodeIcon />, label: t.about.labels.focus, value: t.about.values.focus },
    { icon: <ArrowRightIcon />, label: t.about.labels.experience, value: t.about.values.experience },
    { icon: <MailIcon />, label: t.about.labels.availability, value: t.about.values.availability },
  ];

  return (
    <Section id="sobre">
      <SectionTitle eyebrow={t.nav.about} title={t.about.title} />
      <Grid>
        <Portrait>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/sobre.jpeg" alt={t.about.title} />
        </Portrait>
        <Text>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <InfoGrid>
            {info.map((item) => (
              <InfoItem key={item.label}>
                {item.icon}
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              </InfoItem>
            ))}
          </InfoGrid>
        </Text>
      </Grid>
    </Section>
  );
}
