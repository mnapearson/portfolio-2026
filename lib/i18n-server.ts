import { cookies } from "next/headers";
import { getLang, navLabels } from "./i18n";

export function getLangFromCookies() {
  return getLang(cookies().get("lang")?.value);
}

export function getLangContext() {
  const lang = getLangFromCookies();
  return { lang, nav: navLabels[lang] };
}
