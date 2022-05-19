import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  nameSchema,
  passwordSchema,
} from "../../../../utils/schemas/UserSettings";
import Menu from "../../../../components/Menu";
import Button from "../../../../components/Button";
import { useAuth } from "../../../../providers/user/user";
import FormError from "../../../../components/FormComponents/Error";
import {
  ChangeCollorsButtonDiv,
  ChangeColors,
  ChangeEmail,
  ChangePassword,
  ConfigContainer,
  Container,
  FigureStyled,
  FormNameContainer,
  ImageContainer,
  Main,
  MainInfo,
  PasswordContainer,
  PasswordDiv,
  SelectColor,
} from "./style";

let { Upload } = require("upload-js");

const ProfilePage = () => {
  let history = useHistory();
  const { token, userInfos, colorTheme, setColorTheme, setColorChange, changeUserInfos } = useAuth();
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
    });
  };

  useEffect(() => {
    updateUserInfos();
    console.log(userInfos)
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
    register: register3,
    handleSubmit: handleSubmit3
  } = useForm();

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
      const r = parseInt(hexColor.substr(1, 2), 16)
      const g = parseInt(hexColor.substr(3, 2), 16)
      const b = parseInt(hexColor.substr(5, 2), 16)


      if (type === "primary") {
        const rgba50 = `rgba(${r + 39},${g + 55},${b + 49})`
        return rgba50;

      } else if (type === "secondary") {
        const rgba50 = `rgba(${r - 37},${g - 38},${b - 39})`
        return rgba50;

      } else {
        const rgba50 = `rgba(${r - 26},${g - 26},${b - 26})`
        return rgba50;
      }

    }

    const RGBtoHexConverter = (rgba) => {
      const color = rgba.replace(/^rgba?\(|\s+|\)$/g, '').split(',')
      const hex = `#${((1 << 24) + (parseInt(color[0]) << 16) + (parseInt(color[1]) << 8) + parseInt(color[2])).toString(16).slice(1)}`

      return hex
    }

    const primary50rgba = hexToRGBConverter(data.primaryColor, "primary")
    const secondary50rgba = hexToRGBConverter(data.secondaryColor, "secondary")
    const terciary50rgba = hexToRGBConverter(data.terciaryColor, "terciary")


    const primary50 = RGBtoHexConverter(primary50rgba)
    const secondary50 = RGBtoHexConverter(secondary50rgba)
    const terciary50 = RGBtoHexConverter(terciary50rgba)

    const datas = {
      primaryColor: inputsChange.themes.primary.value,
      primaryColor50: primary50,
      secondaryColor: inputsChange.themes.secondary.value,
      secondaryColor50: secondary50,
      terciaryColor: inputsChange.themes.terciary.value,
      terciaryColor50: terciary50
    }

    console.log(datas)

    setInputsChange((prevState) => {
      return {
        ...prevState,
        themes: {
          editable: true,
          primary: prevState.themes.primary,
          secondary: prevState.themes.secondary,
          terciary: prevState.themes.terciary
        }
      };
    })


    setColorTheme(datas)
    setColorChange(true)
  }

  const setColorsAPI = async () => {

    console.log(colorTheme)
    const data = {
      theme: colorTheme
    }

    await changeUserInfos(
      data,
      "Tema atualizado com sucesso!"
    );

    window.localStorage.setItem("@SmartMenu:theme", JSON.stringify(colorTheme));
  }

  const resetColors = () => {
    console.log(userInfos.theme, "TEMA DO USUARIO")
    setColorTheme(userInfos.theme)

    setInputsChange((prevState) => {
      return {
        ...prevState,
        themes: {
          editable: false,
          primary: prevState.themes.primary,
          secondary: prevState.themes.secondary,
          terciary: prevState.themes.terciary
        }
      };
    })
  }


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

  if (!token) {
    history.push("/");
  }

  return (
    <Container>
      <nav>
        <Menu />
      </nav>

      <Main>
        <h1>Configurações</h1>
        <MainInfo>
          <div>
            <ImageContainer>
              <FigureStyled>
                <img
                  src={inputsChange.logo.value}
                  alt={inputsChange.name.value}
                />
                <figcaption>{inputsChange.name.value}</figcaption>
              </FigureStyled>
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
                  <Button onClick={() => sendImage()}>Confirmar</Button>
                  <Button onClick={() => cancelChangeImage()}>Cancelar</Button>
                </>
              )}
            </ImageContainer>
            <FormNameContainer onSubmit={handleSubmit(ChangeName)}>
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
            </FormNameContainer>
          </div>
        </MainInfo>
        <ConfigContainer>
          <ChangeColors onSubmit={handleSubmit3(setUserColors)}>
            <h6>Selecione suas cores</h6>
            <div>
              <SelectColor>
                <input type="color"
                  value={inputsChange.themes?.primary.value}
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
                          terciary: prevState.themes.terciary
                        }
                      };
                    })
                  }
                />
                <span>Primária</span>
              </SelectColor>
              <SelectColor mid>
                <input type="color"
                  value={inputsChange.themes?.secondary.value}
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
                          terciary: prevState.themes.terciary
                        }
                      };
                    })
                  }
                />
                <span>Secundária</span>
              </SelectColor>
              <SelectColor>
                <input type="color"
                  value={inputsChange.themes?.terciary.value}
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
                        }
                      };
                    })
                  }
                />
                <span>Terciária</span>
              </SelectColor>

            </div>
            <Button type="submit">Confirmar</Button>
          </ChangeColors>
          {inputsChange.themes.editable === true && (
            <ChangeCollorsButtonDiv>
              <Button onClick={() => setColorsAPI()}>Salvar</Button>
              <Button onClick={() => resetColors()}>Redefinir</Button>
            </ChangeCollorsButtonDiv>
          )}
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
                  <FormError>{errors2.passwordConfirmation.message}</FormError>
                )}
              </PasswordDiv>
              <button type="submit">Salvar nova senha</button>
            </PasswordContainer>
          </ChangePassword>
        </ConfigContainer>
      </Main>
    </Container>
  );
};
export default ProfilePage;
