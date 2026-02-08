import { cookies } from "next/headers";
import { getLang } from "./i18n";

export function getLangFromCookies() {
  return getLang(cookies().get("lang")?.value);
}
