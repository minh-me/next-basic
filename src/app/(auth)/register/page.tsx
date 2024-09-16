"use client";
import React, { useState } from "react";
import { ModeToggle } from "@/components/mode-theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Register, RegisterSchema } from "@/validations/auth.validation";
import { Separator } from "@/components/ui/separator";
import { LoaderCircle } from "lucide-react";
import { envConfig } from "@/config";

export default function page() {
  const [loading, setLoading] = useState(false);
  const form = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      authKey: "",
    },
  });

  function onSubmit(values: Register) {
    console.log({ SERVER_URL: envConfig.SERVER_URL });
    console.log(values);
  }

  const goToResetPassword = () => {};
  const goToSignUp = () => {};

  return (
    <div className="w-[400px] space-y-8 mx-auto">
      {/* <AuthHeading
      title="Sign In"
      description="Your Social Campaigns"
      className="text-center"
    /> */}

      {/* <AuthSocialLogin /> */}

      <Separator content="or" />

      <Form {...form}>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="authKey"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="py-5 opacity-90 md:text-sm"
                    type="text"
                    placeholder="Email or Phone"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="opacity-85" />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="py-5 opacity-90 md:text-sm"
                    type="password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="opacity-85" />

                <div className="text-end">
                  <Button
                    type="button"
                    variant="link"
                    className="font-normal text-primary md:text-sm"
                    onClick={() => goToResetPassword()}
                  >
                    Forgot Password ?
                  </Button>
                </div>
              </FormItem>
            )}
          />

          <div className="flex w-full flex-row items-center py-2">
            <Button
              type="submit"
              className="user-select-none w-full py-5"
              disabled={loading}
            >
              {loading && <LoaderCircle className="mr-2 size-4 animate-spin" />}
              Sign In
            </Button>
          </div>
        </form>
      </Form>

      {/* <!-- Sign up navigation --> */}
      <div className="flex flex-row items-center justify-center gap-2 font-medium md:text-sm">
        <span className="text-gray-400">Not a Member yet? </span>
        <Button
          type="button"
          variant="link"
          className="px-0 text-primary transition hover:underline hover:opacity-90"
          onClick={() => goToSignUp()}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}
