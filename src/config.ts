import { z } from "zod";

const configSchema = z.object({
  SERVER_URL: z.string().url(),
});

const configProject = configSchema.safeParse({
  SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
});

if (!configProject.success) {
  console.error(
    "❌ Invalid environment variables:",
    JSON.stringify(configProject.error.format(), null, 2)
  );
  process.exit(1);
}

export const envConfig = configProject.data;
