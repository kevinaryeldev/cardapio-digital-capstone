import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required("Email Obrigatório").email("Email Inválido"),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .min(4, "Senha muito curta"),
});

export default loginSchema;
