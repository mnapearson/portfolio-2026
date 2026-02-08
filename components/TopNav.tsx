"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  labels: { projects: string; products: string; productions: string };
};

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function TopNav({ labels }: Props) {
  const pathname = usePathname();
  const links = [
    { href: "/projects", label: labels.projects },
    { href: "/products", label: labels.products },
    { href: "/productions", label: labels.productions }
  ];

  return (
    <nav aria-label="Primary">
      <ul className="top-nav-list">
        {links.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
