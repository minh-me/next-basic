import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      Auth Layout <br />
      <Input type="text" className="max-w-xs" />
      <br />
      {children}
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <footer>Footer</footer>
    </main>
  );
}
