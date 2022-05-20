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

let { Upload } = require("upload-js");


const FormInfos = ({ setStage, setRegisterData, registerData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formInfosSchema),
  });

  const { name, imageUrl, description, waitingTime, category } = registerData;

  const { categories } = useMenu();

  const [inputImage, setInputImage] = useState();

  const onSubmit = (data) => {
    const newData = {
      ...data,
      imageUrl: inputImage
    }
    setRegisterData((prevState) => {
      return { ...prevState, ...newData };
    });
    setStage((prevState) => {
      return prevState + 1;
    });
  };

  const seeImage = async (image) => {
    if (!image) {
      return;
    }

    const upload = new Upload({
      apiKey: "public_12a1xjk5NxMQ7kknSiy9K6odEyzE",
    });

    const { fileUrl } = await upload.uploadFile({
      file: image,
    });

    setInputImage(fileUrl)
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Infos>
        <div className="product--urlContainer">
          <div className="product--imageContainer">
            <img src={inputImage || imageUrl} alt={name} />
          </div>
          <label htmlFor="uploadImage">Escolher imagem</label>
          <input
            type="file"
            id="uploadImage"
            style={{ display: "none" }}
            onChange={(e) => seeImage(e.target.files[0])}
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
