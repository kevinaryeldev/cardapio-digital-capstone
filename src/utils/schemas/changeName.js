import * as yup from "yup";

const nameSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório").trim("Nome Obrigatório")
});

export default nameSchema;
