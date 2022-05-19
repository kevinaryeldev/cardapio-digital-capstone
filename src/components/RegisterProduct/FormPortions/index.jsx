import { ChangeStage, Form, Item, List } from "../style.";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { GrFormPreviousLink, GrFormCheckmark } from "react-icons/gr";

// Para validação de formulário
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formPortionsSchema } from "../../../utils/schemas/registerProduct";
import { useEffect } from "react";
import { Portions } from "./style";
import FormError from "../../FormComponents/Error";
import formatter from "../../../utils/formatter";
import { toast } from "react-toastify";

const FormPortions = ({
  setStage,
  setRegisterData,
  registerData,
  onSubmitRegister
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formPortionsSchema),
  });

  const { portions } = registerData;

  const onSubmit = (data) => {
    let newData = data
    newData.productName = registerData.name
    setRegisterData((prevState) => {
      if (
        prevState.portions.filter((portion) => portion.name === newData.name)
          .length > 0
      ) {
        toast.error("Porção já existente!");
        return { ...prevState };
      }
      toast.success("Porção adicionada com sucesso!");
      return { ...prevState, portions: [...prevState.portions, { ...newData }] };
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Portions>
        <h2>Porções</h2>

        <div className="addPortionContainer">
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
          <button className="addPortionButton" type="submit">
            <AiOutlinePlusCircle size="24px" />
          </button>
        </div>

        <List>
          {portions.map((portion, index) => (
            <Item key={"portion" + index}>
              <button
                className="removeButton"
                type="button"
                onClick={() => {
                  setRegisterData((prevState) => {
                    return {
                      ...prevState,
                      portions: [
                        ...prevState.portions.filter(
                          (e) => e.name !== portion.name
                        ),
                      ],
                    };
                  });
                  toast.success("Porção removida com sucesso!");
                }}
              >
                <AiOutlineMinusCircle size="20px" />
              </button>
              <p className="name">{portion.name}</p>
              <span className="price">{formatter.format(portion.price)}</span>
            </Item>
          ))}
        </List>

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

        <ChangeStage
          right
          type="button"
          onClick={() => {
            if (portions.length > 0) {
              onSubmitRegister();
            } else {
              toast.error("Ao menos uma porção deve ser adicionada!");
            }
          }}
        >
          <GrFormCheckmark />
        </ChangeStage>
      </Portions>
    </Form>
  );
};

export default FormPortions;
