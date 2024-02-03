import { TypeOf, z } from "zod";

import { fetcher } from "@/lib";

export const loginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginRequest = TypeOf<typeof loginRequestSchema>;

export const login = async ({
  userType,
  email,
  password,
}: LoginRequest & { userType: string }) => {
  return await fetcher.post(`/login/${userType}`, { email, password });
};

export const registerRequestSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  passwordConfirm: z
    .string()
    .min(8, "Password confirm must be at least 8 characters"),
  whatsapp: z.string().min(1, "Whatsapp is required"),
});

export type RegisterType = TypeOf<typeof registerRequestSchema>;

export const register = async ({
  userType,
  name,
  email,
  password,
  passwordConfirm,
  whatsapp,
}: RegisterType & {
  userType: string;
}) => {
  return await fetcher.post(`/register/${userType}`, {
    email,
    name,
    password,
    passwordConfirm,
    whatsapp,
  });
};
