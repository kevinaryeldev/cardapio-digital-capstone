import * as yup from "yup";

export const formInfosSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório"),
  description: yup.string().required("Descrição Obrigatória"),
  category: yup.string().required("Categoria Obrigatória"),
  waitingTime: yup
    .string()
    .required("Tempo de Espera Obrigatório")
    .matches(
      /^[0-9]+(\.[0-9]{1,2})?$/,
      "Digite apenas números com até duas casas decimais"
    ),
});

export const formExtrasSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório"),
  price: yup
    .string()
    .required("Preço Obrigatório")
    .matches(
      /^[0-9]+(\.[0-9]{1,2})?$/,
      "Digite apenas números com até duas casas decimais"
    ),
});

export const formPortionsSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório"),
  price: yup
    .string()
    .required("Preço Obrigatório")
    .matches(
      /^[0-9]+(\.[0-9]{1,2})?$/,
      "Digite apenas números com até duas casas decimais"
    ),
});
