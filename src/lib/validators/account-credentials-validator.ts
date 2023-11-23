import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message:
        "La contraseña debe tener al menos 8 caracteres, un numero y una letra mayúscula.",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message:
        "La contraseña debe tener al menos 8 caracteres, un numero y una letra mayúscula.",
    })
    .refine((password) => /\d/.test(password), {
      message:
        "La contraseña debe tener al menos 8 caracteres, un numero y una letra mayúscula.",
    }),
});

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
