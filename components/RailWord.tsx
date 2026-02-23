"use client";

import { usePathname } from "next/navigation";

const RAIL_LABEL_BY_ROUTE: Record<string, string> = {
  "/": "PROFILE",
  "/projects": "PROJECTS",
  "/products": "PRODUCTS",
  "/productions": "PRODUCTIONS"
};

function getRailLabel(pathname: string | null): string {
  if (!pathname) {
    return RAIL_LABEL_BY_ROUTE["/"];
  }

  if (pathname.startsWith("/productions")) {
    return RAIL_LABEL_BY_ROUTE["/productions"];
  }

  return RAIL_LABEL_BY_ROUTE[pathname] ?? RAIL_LABEL_BY_ROUTE["/"];
}

export default function RailWord() {
  const pathname = usePathname();

  return (
    <span className="rail-word" aria-hidden="true">
      {getRailLabel(pathname)}
    </span>
  );
}
