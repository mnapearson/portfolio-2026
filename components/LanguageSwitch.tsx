"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import type { Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
};

export default function LanguageSwitch({ lang }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const nextLang: Lang = lang === "en" ? "de" : "en";

  function handleClick() {
    document.cookie = `lang=${nextLang}; path=/; max-age=31536000`;
    startTransition(() => router.refresh());
  }

  const label =
    lang === "en" ? "Switch to German" : "Auf Englisch umschalten";

  return (
    <button
      type="button"
      className="lang-badge"
      onClick={handleClick}
      aria-label={label}
      disabled={isPending}
    >
      {lang.toUpperCase()}
    </button>
  );
}
