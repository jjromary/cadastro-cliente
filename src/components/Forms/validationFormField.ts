import * as zod from "zod";

export const registerClientFormValidationSchema = zod.object({
  name: zod
    .string()
    .min(3, "Nome curto demais. Minimo de 3 caracteres")
    .max(30, "Nome muito extenso. Máximo de 30 caracteres"),
  dateBirth: zod
    .string()
    .regex(
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
      "Formato inválido. Insira DD/MM/AAAA"
    ),
  genero: zod.string(),
  cpf: zod
    .string()
    .regex(
      /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
    ),
  email: zod.string().email({ message: "Email inválido" }),
  telphone: zod
    .string()
    .regex(
      /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/,
      "Telefone inválido. Utilize o formato DDD + 999999999"
    ),
  cep: zod.string().min(8, "CEP curto demais. O CEP possui 8 caracteres").regex(/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/, "Cep inválido"),
  street: zod.string().min(3),
  neighborhood: zod.string().min(3),
  city: zod.string().min(3),
  state: zod.string().max(2),
  password: zod
    .string()
    .regex(
      /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Formato Inválido."
    ),
  repeatPassword: zod
    .string()
    .regex(
      /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Formato Inválido."
    ),
}).refine((data) => data.password === data.repeatPassword, {
  message: "As senhas precisam ser idênticas",
  path: ['repeatPassword']
});
