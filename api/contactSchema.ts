import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  title: z.string().min(2, "Title must be at least 2 characters"),
  message: z.string().min(2, "Message must be at least 2 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
