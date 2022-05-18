import * as yup from "yup";

export const nameSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório").trim("Nome Obrigatório")
});

export const passwordSchema = yup.object().shape({
    password: yup
        .string()
        .required("Senha Obrigatória")
        .matches(/(?=.*[A-Z])/, "A senha deve ter, no mínimo, uma letra maiúscula")
        .matches(/^(?=.*[a-z])/, "A senha deve ter, no mínimo, uma letra minúscula")
        .matches(/(?=.*[0-9])/, "A senha deve ter, no mínimo, um número")
        .matches(
            /(?=.*[!@#$%^&*.])/,
            "A senha deve ter, no mínimo, um caractere especial"
        )
        .min(8, "A senha deve ter, no mínimo, 8 caracteres"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password")], "Senhas Incompatíveis"),
});

