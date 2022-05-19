import { ChangeStage, Form } from "../style.";

import { GrFormNextLink } from "react-icons/gr";

// Para validação de formulário
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formInfosSchema } from "../../../utils/schemas/registerProduct";
import { useState } from "react";
import { Infos } from "./style";
import FormError from "../../FormComponents/Error";
import { useMenu } from "../../../providers/menu/menu";

const FormInfos = ({ setStage, setRegisterData, registerData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formInfosSchema),
  });

  const { imageUrl, name, description, waitingTime, category } = registerData;

  const { categories } = useMenu();

  const [inputImage, setInputImage] = useState(imageUrl);

  const onSubmit = (data) => {
    setRegisterData((prevState) => {
      return { ...prevState, ...data };
    });
    setStage((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Infos>
        <div className="product--urlContainer">
          <div className="product--imageContainer">
            <img src={inputImage} alt={name} />
          </div>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            placeholder="Digite a url da imagem aqui"
            defaultValue={inputImage}
            onChange={(event) => setInputImage(event.target.value)}
            {...register("imageUrl")}
          />
          {errors.imageUrl && (
            <FormError maxWidth="none" marginTop="-5px">
              {errors.imageUrl.message}
            </FormError>
          )}
        </div>
        <div className="product--infosContainer">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome do produto"
            defaultValue={name}
            {...register("name")}
          />
          {errors.name && (
            <FormError marginTop="-5px">{errors.name.message}</FormError>
          )}

          <input
            type="text"
            id="description"
            name="description"
            placeholder="Descrição do produto"
            defaultValue={description}
            {...register("description")}
          />
          {errors.description && (
            <FormError marginTop="-5px">{errors.description.message}</FormError>
          )}

          {/*           <input
            type="text"
            id="category"
            name="category"
            placeholder="Categoria do produto"
            defaultValue={category}
            {...register("category")}
          /> */}

          <select
            name="category"
            id="category"
            placeholder="Categoria do produto"
            defaultValue={category}
            {...register("category")}
          >
            {categories.map((category) => (
              <option key={"option" + category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <FormError marginTop="-5px">{errors.category.message}</FormError>
          )}

          <input
            type="text"
            id="waitingTime"
            name="waitingTime"
            placeholder="Tempo de espera (min)"
            defaultValue={waitingTime}
            {...register("waitingTime")}
          />
          {errors.waitingTime && (
            <FormError marginTop="-5px">{errors.waitingTime.message}</FormError>
          )}
        </div>

        <ChangeStage right>
          <GrFormNextLink />
        </ChangeStage>
      </Infos>
    </Form>
  );
};

export default FormInfos;
