"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function RegisterPage() {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/login");
  };
  return (
    <div className="w-[400px] space-y-8 mx-auto">
      Register Page
      <br />
      <Button onClick={() => handleRegister()}>Register</Button>
    </div>
  );
}
