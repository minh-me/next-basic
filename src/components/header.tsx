import { ModeToggle } from "@/components/mode-theme";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 lg:px-8">
      <h1 className="text-2xl font-bold">Next.js</h1>

      <nav>
        <ul className="flex gap-4 items-center">
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

          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
}
