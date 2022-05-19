import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  categorySchema,
  nameSchema,
  passwordSchema,
} from "../../../../utils/schemas/UserSettings";
import Menu from "../../../../components/Menu";
import Button from "../../../../components/Button";
import { useAuth } from "../../../../providers/user/user";
import FormError from "../../../../components/FormComponents/Error";

import {
  ChangeEmail,
  ChangePassword,
  Container,
  LogoArea,
  Main,
  NameArea,
  PasswordContainer,
  PasswordDiv,
  SelectColor,
  ThemeArea,
} from "./style";

let { Upload } = require("upload-js");

const ProfilePage = () => {
  let history = useHistory();
  const { token, userInfos, changeUserInfos } = useAuth();
  const { email, name, logoUrl, theme, categories } = userInfos;

  const [inputsChange, setInputsChange] = useState({
    name: {
      editable: false,
      value: name,
    },
    email: {
      editable: false,
      value: email,
    },
    logo: {
      editable: false,
      originValue: logoUrl,
      value: logoUrl,
    },
    themes: {
      primary: {
        editable: false,
        value: theme?.primaryColor,
      },
      secondary: {
        editable: false,
        value: theme?.secondaryColor,
      },
      terciary: {
        editable: false,
        value: theme?.terciaryColor,
      },
    },
    category: {
      editable: false,
      value: "empty",
    },
  });

  //A 1ª renderização desse componente vem com userInfos um objeto vazio, daí o useEffect realiza essa função para atualizar as informações!
  const updateUserInfos = () => {
    setInputsChange({
      name: {
        editable: false,
        value: name,
      },
      email: {
        editable: false,
        value: email,
      },
      logo: {
        editable: false,
        originValue: logoUrl,
        value: logoUrl,
      },
      themes: {
        primary: {
          editable: false,
          value: theme?.primaryColor,
        },
        secondary: {
          editable: false,
          value: theme?.secondaryColor,
        },
        terciary: {
          editable: false,
          value: theme?.terciaryColor,
        },
      },
      category: {
        editable: false,
        value: "empty",
      },
    });
  };

  useEffect(() => {
    updateUserInfos();
  }, [userInfos]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(nameSchema),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const {
    register: registerCategory,
    handleSubmit: handleSubmitCategory,
    formState: { errors: errorsCategory },
  } = useForm({
    resolver: yupResolver(categorySchema),
  });

  const cancelChangeImage = () => {
    setInputsChange((prevState) => {
      return {
        ...prevState,
        logo: {
          editable: false,
          originValue: prevState.logo.originValue,
          value: prevState.logo.originValue,
        },
      };
    });
  };

  const seeImage = async (image) => {
    if (!image) {
      return;
    }

    setInputsChange((prevState) => {
      return {
        ...prevState,
        logo: {
          editable: true,
          originValue: prevState.logo.originValue,
          value: prevState.logo.value,
        },
      };
    });

    const upload = new Upload({
      apiKey: "public_12a1xjk5NxMQ7kknSiy9K6odEyzE",
    });

    const { fileUrl } = await upload.uploadFile({
      file: image,
    });

    if (fileUrl) {
      setInputsChange((prevState) => {
        return {
          ...prevState,
          logo: {
            editable: true,
            originValue: prevState.logo.originValue,
            value: fileUrl,
          },
        };
      });
    } else {
      setInputsChange((prevState) => {
        return {
          ...prevState,
          logo: {
            editable: false,
            originValue: prevState.logo.originValue,
            value: prevState.logo.value,
          },
        };
      });
    }
  };

  const sendImage = async () => {
    const data = {
      logoUrl: inputsChange.logo.value,
    };

    await changeUserInfos(
      data,
      "Imagem atualizada com sucesso",
      "Ocorreu algum erro!"
    );

    setInputsChange((prevState) => {
      return {
        ...prevState,
        logo: {
          editable: false,
          originValue: prevState.logo.originValue,
          value: prevState.logo.value,
        },
      };
    });
  };

  const ChangeName = async (data) => {
    await changeUserInfos(
      data,
      "Nome atualizado com sucesso",
      "Ocorreu algum erro e o nome não foi atualizado!"
    );

    setInputsChange((prevState) => {
      return {
        ...prevState,
        name: {
          editable: false,
          value: data.name,
        },
      };
    });
  };

  const ChangeMail = async () => {
    const data = {
      email: inputsChange.email.value,
    };

    const patch = async (event) => {
      const response = await changeUserInfos(
        data,
        "Email atualizado com sucesso!",
        "Email inválido!"
      );

      if (response) {
        setInputsChange((prevState) => {
          return {
            ...prevState,
            email: {
              editable: true,
              value: data.email,
            },
          };
        });
      } else {
        setInputsChange((prevState) => {
          return {
            ...prevState,
            email: {
              editable: true,
              value: email,
            },
          };
        });
      }
    };

    await patch();
    setInputsChange((prevState) => {
      return {
        ...prevState,
        email: {
          editable: false,
          value: prevState.email.value,
        },
      };
    });
  };

  const ChangePass = async (data) => {
    const pass = {
      password: data.password,
    };

    await changeUserInfos(
      pass,
      "Senha atualizada com sucesso!",
      "Ocorreu algum erro e a senha não foi atualizada!"
    );
    reset();
  };

  const changeCategory = async (data) => {
    if (
      inputsChange.category.value === "empty" ||
      inputsChange.category.value === ""
    ) {
      const updatedCategories = [...categories, data.category];
      const newData = { categories: updatedCategories };
      await changeUserInfos(
        newData,
        "Categoria adicionada com sucesso!",
        "Ocorreu algum erro e a categoria não foi adicionada!"
      );
    } else {
      const updatedCategories = categories.map((category) => {
        if (category === inputsChange.category.value) {
          category = data.category;
        }
        return category;
      });
      const newData = { categories: updatedCategories };
      await changeUserInfos(
        newData,
        "Categoria editada com sucesso!",
        "Ocorreu algum erro e a categoria não foi editada!"
      );
    }

    setInputsChange((prevState) => {
      return {
        ...prevState,
        category: {
          editable: false,
          value: "empty",
        },
      };
    });
  };

  const deleteCategory = async () => {
    const updatedCategories = categories.filter(
      (category) => category !== inputsChange.category.value
    );
    const newData = { categories: updatedCategories };

    await changeUserInfos(
      newData,
      "Categoria removida com sucesso!",
      "Ocorreu algum erro e a categoria não foi removida!"
    );

    setInputsChange((prevState) => {
      return {
        ...prevState,
        category: {
          editable: false,
          value: "empty",
        },
      };
    });
  };

  if (!token) {
    history.push("/");
  }

  return (
    <Container>
      <Menu />

      <Main>
        <section className="profileSection brandInfo">
          <h2>Informações da Marca</h2>

          <div className="content">
            <LogoArea>
              <div className="imageContainer">
                <img
                  src={inputsChange.logo.value}
                  alt={inputsChange.name.value}
                />
              </div>

              {!inputsChange.logo.editable && (
                <label htmlFor="uploadImage">Trocar</label>
              )}

              <input
                type="file"
                id="uploadImage"
                style={{ display: "none" }}
                onChange={(e) => seeImage(e.target.files[0])}
              />

              {inputsChange.logo.editable && (
                <>
                  <Button width="100%" bgYellow onClick={() => sendImage()}>
                    Confirmar
                  </Button>
                  <Button
                    width="100%"
                    bgYellow
                    onClick={() => cancelChangeImage()}
                  >
                    Cancelar
                  </Button>
                </>
              )}
            </LogoArea>

            <NameArea onSubmit={handleSubmit(ChangeName)}>
              {!!errors.name && <FormError>{errors.name.message}</FormError>}
              {!inputsChange.name.editable && (
                <h3>{inputsChange.name.value}</h3>
              )}
              {inputsChange.name.editable && (
                <input type="text" id="name" {...register("name")} />
              )}
              {inputsChange.name.editable === false && (
                <button
                  onClick={() =>
                    setInputsChange((prevState) => {
                      return {
                        ...prevState,
                        name: {
                          editable: true,
                          value: prevState.name.value,
                        },
                      };
                    })
                  }
                >
                  Modificar nome
                </button>
              )}
              {inputsChange.name.editable === true && (
                <button type="submit">Confirmar</button>
              )}
            </NameArea>
          </div>

          <div className="content content__column">
            <h6>Selecione suas cores</h6>
            <ThemeArea>
              <SelectColor>
                <input type="color" name="primaryColor" id="primaryColor" />
                <span>Primária</span>
              </SelectColor>
              <SelectColor mid>
                <input type="color" name="secondaryColor" id="secondaryColor" />
                <span>Secundária</span>
              </SelectColor>
              <SelectColor>
                <input type="color" name="terciaryColor" id="terciaryColor" />
                <span>Terciária</span>
              </SelectColor>
            </ThemeArea>
          </div>

          <div className="content content__column">
            <h6>Edite suas Categorias</h6>
            <ThemeArea onSubmit={handleSubmitCategory(changeCategory)}>
              {inputsChange.category.editable && (
                <>
                  <input
                    type="text"
                    id="category"
                    {...registerCategory("category")}
                  />
                  <button type="submit">Confirmar</button>
                </>
              )}
              {!inputsChange.category.editable && (
                <>
                  <select
                    defaultValue={inputsChange.category.value}
                    name="categories"
                    id="categories"
                    onChange={(event) => {
                      setInputsChange((prevState) => {
                        return {
                          ...prevState,
                          category: {
                            editable: prevState.category.editable,
                            value: event.target.value,
                          },
                        };
                      });
                      console.log(inputsChange.category.value);
                    }}
                  >
                    <option value="empty"></option>
                    {categories?.map((category) => (
                      <option value={category}>{category}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() =>
                      setInputsChange((prevState) => {
                        return {
                          ...prevState,
                          category: {
                            editable: true,
                            value: prevState.category.value,
                          },
                        };
                      })
                    }
                  >
                    {inputsChange.category.value === "empty" ||
                    inputsChange.category.value === ""
                      ? "Adicionar"
                      : "Editar"}
                  </button>
                  {inputsChange.category.value !== "empty" &&
                    !inputsChange.category.editable && (
                      <button type="button" onClick={() => deleteCategory()}>
                        Remover
                      </button>
                    )}
                </>
              )}
            </ThemeArea>
          </div>
        </section>

        <section className="profileSection accountInfo">
          <h2>Informações da Conta</h2>

          <div className="content content__column">
            <ChangeEmail>
              <h6>Endereço de Email</h6>
              <div>
                {!inputsChange.email.editable && (
                  <p>
                    Seu endereço de email é{" "}
                    <strong>{inputsChange.email.value}</strong>
                  </p>
                )}
                {inputsChange.email.editable && (
                  <p>
                    Seu endereço de email é
                    <input
                      type="email"
                      id="email"
                      onChange={(event) =>
                        setInputsChange((prevState) => {
                          return {
                            ...prevState,
                            email: {
                              editable: prevState.email.editable,
                              value: event.target.value,
                            },
                          };
                        })
                      }
                    />
                  </p>
                )}

                {!inputsChange.email.editable && (
                  <button
                    onClick={() =>
                      setInputsChange((prevState) => {
                        return {
                          ...prevState,
                          email: {
                            editable: true,
                            value: prevState.email.value,
                          },
                        };
                      })
                    }
                  >
                    Trocar
                  </button>
                )}
                {inputsChange.email.editable && (
                  <button type="button" onClick={() => ChangeMail()}>
                    Confirmar
                  </button>
                )}
              </div>
            </ChangeEmail>

            <ChangePassword onSubmit={handleSubmit2(ChangePass)}>
              <h6>Senha</h6>
              <PasswordContainer>
                <PasswordDiv>
                  <span>Nova senha</span>
                  <input
                    type="password"
                    id="password"
                    {...register2("password")}
                  />
                  {!!errors2.password && (
                    <FormError>{errors2.password.message}</FormError>
                  )}
                </PasswordDiv>
                <PasswordDiv>
                  <span>Confirmar senha</span>
                  <input
                    type="password"
                    id="passwordConfirmation"
                    {...register2("passwordConfirmation")}
                  />
                  {!!errors2.passwordConfirmation && (
                    <FormError>
                      {errors2.passwordConfirmation.message}
                    </FormError>
                  )}
                </PasswordDiv>
                <button type="submit">Salvar nova senha</button>
              </PasswordContainer>
            </ChangePassword>
          </div>
        </section>
      </Main>
    </Container>
  );
};

export default ProfilePage;
