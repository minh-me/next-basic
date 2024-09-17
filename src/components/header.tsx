"use client";
import { ModeToggle } from "@/components/mode-theme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const authLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between p-4 lg:px-8">
      <h1 className="text-2xl font-bold">
        <Link href="/">Next.js</Link>
      </h1>

      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link
              href="/products"
              className={pathname === "/products" ? "font-bold underline" : ""}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/vercel/next.js"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
              Documentation
            </a>
          </li>

          {authLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "font-bold underline" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
}
