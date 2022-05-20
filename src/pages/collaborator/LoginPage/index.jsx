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
} from "../SignUpPage/style";

// Para validação de formulário
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import loginSchema from "../../../utils/schemas/login";
import { useAuth } from "../../../providers/user/user";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { token, login } = useAuth();

  const [viewPassword, setViewPassword] = useState({
    open: false,
    type: "password",
  });

  const onSubmit = (data) => {
    login(data);
  };

  if (token) {
    return <Redirect to="/admin" />;
  }

  return (
    <Container background="#21262D">
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1 lang="en">LOGIN</h1>

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
              type={viewPassword.type}
              id="password"
              error={errors.password}
              registerType={{ ...register("password") }}
            />
            {viewPassword.open ? (
              <ViewPassword
                onClick={() =>
                  setViewPassword({
                    open: false,
                    type: "password",
                  })
                }
              />
            ) : (
              <ViewPassword
                open
                onClick={() =>
                  setViewPassword({
                    open: true,
                    type: "text",
                  })
                }
              />
            )}
          </PasswordContainer>
          {errors.password && <FormError>{errors.password.message}</FormError>}

          <Button type="submit">Login</Button>

          <Account>
            Não tem uma conta?
            <Link to="/signup">Cadastre-se aqui!</Link>
          </Account>
        </FormContainer>
        <ImageContainer></ImageContainer>
      </MainContainer>
    </Container>
  );
};

export default LoginPage;
