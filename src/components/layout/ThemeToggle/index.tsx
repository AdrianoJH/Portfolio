"use client";

import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/context/LanguageContext";
import { IconButton } from "@/components/ui/IconButton";
import { SunIcon, MoonIcon } from "@/components/ui/Icons";

export function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <IconButton label={t.a11y.toggleTheme} onClick={toggleTheme}>
      {mode === "dark" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
