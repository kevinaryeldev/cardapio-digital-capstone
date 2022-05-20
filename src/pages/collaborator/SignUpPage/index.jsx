import Input from "../../../components/FormComponents/Input";
import Label from "../../../components/FormComponents/Label";
import ViewPassword from "../../../components/FormComponents/ViewPassword";
import Button from "../../../components/FormComponents/Button";
import FormError from "../../../components/FormComponents/Error";
import Account from "../../../components/FormComponents/Account";

import { Container } from "../../../styles/container";
import {
  FormContainer,
  ImageContainer,
  MainContainer,
  PasswordContainer,
} from "./style";

// Para validação de formulário
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signUpSchema from "../../../utils/schemas/signup";

import { Link } from "react-router-dom";
import { useAuth } from "../../../providers/user/user";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { token, signUp } = useAuth();
  let history = useHistory();

  if (token) {
    history.push("/admin/profile");
  }

  const [viewPassword, setViewPassword] = useState({
    password: {
      open: false,
      type: "password",
    },
    passwordConfirmation: {
      open: false,
      type: "password",
    },
  });

  const onSubmit = ({ name, email, password }) => {
    signUp({
      name,
      email,
      password,
      type: "admin",
      logoUrl: "https://upcdn.io/12a1xjkUbsopyEttynTdecm",
      bannerUrl: "",
      theme: {
        primaryColor: "#21262D",
        primaryColor50: "#485D5E",
        secondaryColor: "#DDBC8B",
        secondaryColor50: "#B89664",
        terciaryColor: "#FFFFFF",
        terciaryColor50: "#E5E5E5",
      },
      categories: ["Entradas", "Pratos Principais", "Bebidas", "Sobremesas"],
      tableQuantity: 1,
    });
  };

  return (
    <Container background="#21262D">
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1 lang="en">SIGN UP</h1>

          <Label htmlFor="name">Nome do Restaurante</Label>
          <Input
            type="text"
            id="name"
            error={errors.name}
            registerType={{ ...register("name") }}
          />
          {errors.name && <FormError>{errors.name.message}</FormError>}

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            error={errors.email}
            registerType={{ ...register("email") }}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}

          <Label htmlFor="password">Senha</Label>
          <PasswordContainer>
            <Input
              maxLength="30"
              type={viewPassword.password.type}
              id="password"
              error={errors.password}
              registerType={{ ...register("password") }}
            />
            {viewPassword.password.open ? (
              <ViewPassword
                onClick={() =>
                  setViewPassword((prevState) => {
                    return {
                      ...prevState,
                      password: {
                        open: false,
                        type: "password",
                      },
                    };
                  })
                }
              />
            ) : (
              <ViewPassword
                open
                onClick={() =>
                  setViewPassword((prevState) => {
                    return {
                      ...prevState,
                      password: {
                        open: true,
                        type: "text",
                      },
                    };
                  })
                }
              />
            )}
          </PasswordContainer>
          {errors.password && <FormError>{errors.password.message}</FormError>}

          <Label htmlFor="passwordConfirmation">Confirmar Senha</Label>
          <PasswordContainer>
            <Input
              maxLength="30"
              type={viewPassword.passwordConfirmation.type}
              id="passwordConfirmation"
              error={errors.passwordConfirmation}
              registerType={{ ...register("passwordConfirmation") }}
            />
            {viewPassword.passwordConfirmation.open ? (
              <ViewPassword
                onClick={() =>
                  setViewPassword((prevState) => {
                    return {
                      ...prevState,
                      passwordConfirmation: {
                        open: false,
                        type: "password",
                      },
                    };
                  })
                }
              />
            ) : (
              <ViewPassword
                open
                onClick={() =>
                  setViewPassword((prevState) => {
                    return {
                      ...prevState,
                      passwordConfirmation: {
                        open: true,
                        type: "text",
                      },
                    };
                  })
                }
              />
            )}
          </PasswordContainer>
          {errors.passwordConfirmation && (
            <FormError>{errors.passwordConfirmation.message}</FormError>
          )}

          <Button type="submit">Sign Up</Button>

          <Account>
            Já tem uma conta?
            <Link to="/login">Faça seu login aqui!</Link>
          </Account>
        </FormContainer>
        <ImageContainer></ImageContainer>
      </MainContainer>
    </Container>
  );
};

export default SignUpPage;
