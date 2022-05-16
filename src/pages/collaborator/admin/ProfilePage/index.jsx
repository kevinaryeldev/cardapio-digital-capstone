import { ChangeColors, ChangeEmail, ChangePassword, ConfigContainer, Container, FigureStyled, FormNameContainer, ImageContainer, Main, MainInfo, PasswordContainer, PasswordDiv, SelectColor } from "./style"

import Menu from "../../../../components/Menu"
import Button from "../../../../components/Button";
import FormError from "../../../../components/FormComponents/Error";

import Logo from "../../../../assets/img/Logo.png";

import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import { getUserData, patchEmail, patchName, patchPassword } from "../../../../services/users/users";
import { useAuth } from "../../../../providers/user/user";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import nameSchema from "../../../../utils/schemas/changeName";
import passwordSchema from "../../../../utils/schemas/changePassword";

const ProfilePage = () => {

    const { id, token } = useAuth();
    const [userInfo, setUserInfo] = useState({})
    const { email, name } = userInfo

    const [nameInput, setNameInput] = useState(false)
    const [restaurantName, setRestaurantName] = useState(name)

    const [emailInput, setEmailInput] = useState(false)
    const [restaurantEmail, setRestaurantEmail] = useState(email)

    const [restaurantPassword, setRestaurantPassword] = useState("")

    let history = useHistory();

    useEffect(() => {
        const getInfo = async () => {
            const response = await getUserData(id, token)
            setUserInfo(response)
            setRestaurantName(response.name)
            setRestaurantEmail(response.email)
        }
        getInfo()
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(nameSchema),
        });

    const {
        register: register2,
        handleSubmit: handleSubmit2,
        reset,
        formState: { errors: errors2 } } = useForm({
            resolver: yupResolver(passwordSchema),
        });

    const ChangeName = (data) => {
        setNameInput(false)
        patchName(restaurantName, id, token)
        setRestaurantName(restaurantName)

    }

    const ChangeMail = () => {
        setEmailInput(false)

        const patch = async () => {
            const response = await patchEmail(restaurantEmail, id, token)

            if (response === true) {
                setRestaurantEmail(restaurantEmail)
            } else {
                setRestaurantEmail(email)
            }
        }
        patch()
    }

    const ChangePass = (data) => {
        patchPassword(restaurantPassword, id, token)
        reset()
    }

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
                                <img src={Logo} alt="{RESTAURANTE}" />
                                <figcaption>{name}</figcaption>
                            </FigureStyled>
                            <Button bgYellow>Trocar</Button>
                        </ImageContainer>
                        <FormNameContainer onSubmit={handleSubmit(ChangeName)}>
                            {errors.name && <FormError>{errors.name.message}</FormError>}
                            {nameInput === false && <h3>{restaurantName}</h3>}
                            {nameInput === true &&
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name")}
                                    onChange={(e) => setRestaurantName(e.target.value)}
                                />
                            }
                            {nameInput === false &&
                                <button onClick={() => setNameInput(true)}>Modificar nome</button>
                            }
                            {nameInput === true &&
                                <button type="submit">Confirmar</button>
                            }

                        </FormNameContainer>
                    </div>
                </MainInfo>
                <ConfigContainer>
                    <ChangeColors>
                        <h6>Selecione suas cores</h6>
                        <div>
                            <SelectColor>
                                <input type="color" name="" id="" />
                                <span>Primária</span>
                            </SelectColor>
                            <SelectColor mid>
                                <input type="color" name="" id="" />
                                <span>Secundária</span>
                            </SelectColor>
                            <SelectColor>
                                <input type="color" name="" id="" />
                                <span>Terciária</span>
                            </SelectColor>
                        </div>
                    </ChangeColors>
                    <ChangeEmail>
                        <h6>Endereço de Email</h6>
                        <div>
                            {emailInput === false &&
                                <p>Seu endereço de email é <strong>{restaurantEmail}</strong></p>
                            }
                            {emailInput === true &&
                                <p>Seu endereço de email é
                                    <input
                                        type="email"
                                        id="email"
                                        onChange={(e) => setRestaurantEmail(e.target.value)}
                                    />
                                </p>
                            }

                            {emailInput === false &&
                                <button onClick={() => setEmailInput(true)}>Trocar</button>
                            }
                            {emailInput === true &&
                                <button onClick={() => ChangeMail()}>Confirmar</button>
                            }
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
                                    {...register2("password") }
                                    onChange={(e) => setRestaurantPassword(e.target.value)}
                                />
                                {errors2.password && <FormError>{errors2.password.message}</FormError>}
                            </PasswordDiv>
                            <PasswordDiv>
                                <span>Confirmar senha</span>
                                <input
                                    type="password"
                                    id="passwordConfirmation"
                                    {...register2("passwordConfirmation")}
                                />
                                {errors2.passwordConfirmation && <FormError>{errors2.passwordConfirmation.message}</FormError>}
                            </PasswordDiv>
                            <button type="submit">Salvar nova senha</button>
                        </PasswordContainer>
                    </ChangePassword>
                </ConfigContainer>
            </Main>
        </Container>
    )
}
export default ProfilePage