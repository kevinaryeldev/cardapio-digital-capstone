import { ChangeStage, Form, Item, List } from "../style.";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

// Para validação de formulário
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formExtrasSchema } from "../../../utils/schemas/registerProduct";
import { useEffect } from "react";
import { Extras } from "./style";
import formatter from "../../../utils/formatter";
import { toast } from "react-toastify";
import FormError from "../../FormComponents/Error";

const FormExtras = ({ setStage, setRegisterData, registerData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formExtrasSchema),
  });

  const { extras } = registerData;

  const onSubmit = (data) => {
    let newData = data
    newData.productName = registerData.name
    setRegisterData((prevState) => {
      if (
        prevState.extras.filter((extra) => extra.name === newData.name).length > 0
      ) {
        toast.error("Adicional já existente!");
        return { ...prevState };
      }
      toast.success("Adicional acrescentado com sucesso!");
      return { ...prevState, extras: [...prevState.extras, { ...newData }] };
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Extras>
        <h2>Adicionais</h2>

        <div className="addExtraContainer">
          <div className="inputContainer inputContainer__name">
            <input
              className="name"
              type="text"
              placeholder="Nome"
              {...register("name")}
            />
            {errors.name && (
              <FormError marginTop="5px">{errors.name.message}</FormError>
            )}
          </div>
          <div className="inputContainer inputContainer__price">
            <input
              className="price"
              type="text"
              placeholder="Preço"
              {...register("price")}
            />
            {errors.price && (
              <FormError marginTop="5px">{errors.price.message}</FormError>
            )}
          </div>
          <button className="addExtraButton" type="submit">
            <AiOutlinePlusCircle size="24px" />
          </button>
        </div>

        <List>
          {extras.map((extra, index) => (
            <Item key={"extra" + index}>
              <button
                className="removeButton"
                type="button"
                onClick={() => {
                  setRegisterData((prevState) => {
                    return {
                      ...prevState,
                      extras: [
                        ...prevState.extras.filter(
                          (e) => e.name !== extra.name
                        ),
                      ],
                    };
                  });
                }}
              >
                <AiOutlineMinusCircle size="20px" />
              </button>
              <p className="name">{extra.name}</p>
              <span className="price">{formatter.format(extra.price)}</span>
            </Item>
          ))}
        </List>

        <ChangeStage
          right
          type="button"
          onClick={() => {
            setStage((prevState) => {
              return prevState + 1;
            });
          }}
        >
          <GrFormNextLink />
        </ChangeStage>

        <ChangeStage
          left
          type="button"
          onClick={() =>
            setStage((prevState) => {
              return prevState - 1;
            })
          }
        >
          <GrFormPreviousLink />
        </ChangeStage>
      </Extras>
    </Form>
  );
};

export default FormExtras;
