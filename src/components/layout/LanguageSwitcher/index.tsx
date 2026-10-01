"use client";

import { useTranslation } from "@/context/LanguageContext";
import { localeNames } from "@/lib/i18n";
import { LOCALES, type Locale } from "@/lib/types";
import { Wrapper, LangButton } from "./styles";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  return (
    <Wrapper role="group" aria-label={t.a11y.selectLanguage}>
      {LOCALES.map((lng: Locale) => (
        <LangButton
          key={lng}
          $active={locale === lng}
          aria-pressed={locale === lng}
          onClick={() => setLocale(lng)}
        >
          {localeNames[lng]}
        </LangButton>
      ))}
    </Wrapper>
  );
}
