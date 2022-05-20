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
  ChangeCollorsButtonDiv,
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
import { Redirect } from "react-router-dom";
import { getUserData } from "../../../../services/users/users";

let { Upload } = require("upload-js");

const ProfilePage = () => {
  const {
    token,
    userInfos,
    colorTheme,
    setColorTheme,
    setColorChange,
    changeUserInfos,
    setCategories,
    table,
    setTable,
  } = useAuth();
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
      editable: false,
      primary: {
        value: theme?.primaryColor,
      },
      secondary: {
        value: theme?.secondaryColor,
      },
      terciary: {
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
        editable: false,
        primary: {
          value: theme?.primaryColor,
        },
        secondary: {
          value: theme?.secondaryColor,
        },
        terciary: {
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
    setTable(userInfos.tableQuantity);
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

  const { register: register3, handleSubmit: handleSubmit3 } = useForm();

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

  const setUserColors = (data) => {
    const hexToRGBConverter = (hexColor, type) => {
      const r = parseInt(hexColor.substr(1, 2), 16);
      const g = parseInt(hexColor.substr(3, 2), 16);
      const b = parseInt(hexColor.substr(5, 2), 16);

      if (type === "primary") {
        const rgba50 = `rgba(${r + 39},${g + 55},${b + 49})`;
        return rgba50;
      } else if (type === "secondary") {
        const rgba50 = `rgba(${r - 37},${g - 38},${b - 39})`;
        return rgba50;
      } else {
        const rgba50 = `rgba(${r - 26},${g - 26},${b - 26})`;
        return rgba50;
      }
    };

    const RGBtoHexConverter = (rgba) => {
      const color = rgba.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
      const hex = `#${(
        (1 << 24) +
        (parseInt(color[0]) << 16) +
        (parseInt(color[1]) << 8) +
        parseInt(color[2])
      )
        .toString(16)
        .slice(1)}`;

      return hex;
    };

    const primary50rgba = hexToRGBConverter(data.primaryColor, "primary");
    const secondary50rgba = hexToRGBConverter(data.secondaryColor, "secondary");
    const terciary50rgba = hexToRGBConverter(data.terciaryColor, "terciary");

    const primary50 = RGBtoHexConverter(primary50rgba);
    const secondary50 = RGBtoHexConverter(secondary50rgba);
    const terciary50 = RGBtoHexConverter(terciary50rgba);

    const datas = {
      primaryColor: inputsChange.themes.primary.value,
      primaryColor50: primary50,
      secondaryColor: inputsChange.themes.secondary.value,
      secondaryColor50: secondary50,
      terciaryColor: inputsChange.themes.terciary.value,
      terciaryColor50: terciary50,
    };

    setInputsChange((prevState) => {
      return {
        ...prevState,
        themes: {
          editable: true,
          primary: prevState.themes.primary,
          secondary: prevState.themes.secondary,
          terciary: prevState.themes.terciary,
        },
      };
    });

    setColorTheme(datas);
    setColorChange(true);
  };

  const setColorsAPI = async () => {
    const data = {
      theme: colorTheme,
    };

    await changeUserInfos(data, "Tema atualizado com sucesso!");
  };

  const resetColors = () => {
    setColorTheme(userInfos.theme);

    setInputsChange((prevState) => {
      return {
        ...prevState,
        themes: {
          editable: false,
          primary: prevState.themes.primary,
          secondary: prevState.themes.secondary,
          terciary: prevState.themes.terciary,
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
      setCategories(newData.categories);
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

  const changeTableQty = async () => {
    const data = {
      tableQuantity: Number(table),
    };

    await changeUserInfos(data, "Quantidade de Mesas atualizado.");
  };

  if (!token) {
    return <Redirect to="/" />;
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
              {!inputsChange.name.editable && (
                <h3>{inputsChange.name.value}</h3>
              )}
              {inputsChange.name.editable && (
                <input type="text" id="name" defaultValue={inputsChange.name.value} {...register("name")} />
              )}
              {!!errors.name && (
                <FormError marginTop="0px">{errors.name.message}</FormError>
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
            <ThemeArea onSubmit={handleSubmit3(setUserColors)} id="color">
              <SelectColor>
                <input
                  type="color"
                  value={inputsChange.themes?.primary.value || "#21262D"}
                  {...register3("primaryColor")}
                  onChange={(event) =>
                    setInputsChange((prevState) => {
                      return {
                        ...prevState,
                        themes: {
                          editable: prevState,
                          primary: {
                            value: event.target.value,
                          },
                          secondary: prevState.themes.secondary,
                          terciary: prevState.themes.terciary,
                        },
                      };
                    })
                  }
                />
                <span>Primária</span>
              </SelectColor>
              <SelectColor mid>
                <input
                  type="color"
                  value={inputsChange.themes?.secondary.value || "#DDBC8B"}
                  {...register3("secondaryColor")}
                  onChange={(event) =>
                    setInputsChange((prevState) => {
                      return {
                        ...prevState,
                        themes: {
                          editable: prevState,
                          primary: prevState.themes.primary,
                          secondary: {
                            value: event.target.value,
                          },
                          terciary: prevState.themes.terciary,
                        },
                      };
                    })
                  }
                />
                <span>Secundária</span>
              </SelectColor>
              <SelectColor>
                <input
                  type="color"
                  value={inputsChange.themes?.terciary.value || "#FFFFFF"}
                  {...register3("terciaryColor")}
                  onChange={(event) =>
                    setInputsChange((prevState) => {
                      return {
                        ...prevState,
                        themes: {
                          editable: prevState,
                          primary: prevState.themes.primary,
                          secondary: prevState.themes.secondary,
                          terciary: {
                            value: event.target.value,
                          },
                        },
                      };
                    })
                  }
                />
                <span>Terciária</span>
              </SelectColor>
              <Button type="submit">Confirmar</Button>
              {inputsChange.themes.editable === true && (
                <ChangeCollorsButtonDiv>
                  <Button onClick={() => setColorsAPI()}>Salvar</Button>
                  <Button onClick={() => resetColors()}>Redefinir</Button>
                </ChangeCollorsButtonDiv>
              )}
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
                    defaultValue={inputsChange.category.value || "empty"}
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
                    }}
                  >
                    <option key="empty" value="empty"></option>
                    {categories?.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
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
          <div className="content content__column">
            <h6>Define a quantidade de mesas no estabelecimento</h6>
            <ThemeArea>
              <>
                <input
                  type="number"
                  id="table"
                  value={table}
                  onChange={(e) => setTable(e.target.value)}
                />
                <button type="button" onClick={() => changeTableQty()}>
                  Confirmar
                </button>
              </>
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
                      defaultValue={inputsChange.email.value}
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
