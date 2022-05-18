import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { nameSchema, passwordSchema } from "../../../../utils/schemas/UserSettings";
import Menu from "../../../../components/Menu"
import Button from "../../../../components/Button";
import { useAuth } from "../../../../providers/user/user";
import FormError from "../../../../components/FormComponents/Error";
import { getUserData, patchUserData } from "../../../../services/users/users";
import { 
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
    SelectColor 
} from "./style"

let { Upload } = require("upload-js")

const ProfilePage = () => {

    let history = useHistory();
    const { id, token} = useAuth();
    const [userInfo, setUserInfo] = useState({})
    const { email, name } = userInfo

    const [image, setImage] = useState()
    const [defaultImage, setDefaultImage] = useState()
    const [nameInput, setNameInput] = useState(false)
    const [imageInput, setImageInput] = useState(false)
    const [emailInput, setEmailInput] = useState(false)
    const [restaurantName, setRestaurantName] = useState(name)
    const [restaurantEmail, setRestaurantEmail] = useState(email)

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

    const cancelChangeImage = () => {
        setImage(defaultImage)
        setImageInput(false)
    }
    
    const seeImage = async (image) => {
        setImageInput(true)

        const upload = new Upload({
            apiKey: "public_12a1xjk5NxMQ7kknSiy9K6odEyzE"
        })

        const { fileUrl } = await upload.uploadFile({
            file: image
        });

        setImage(fileUrl)
    }

    const sendImage = () => {
        const data = {
            logoUrl: image
        }
        
        patchUserData(data,id, token, "Foto atualizada!")
        setImageInput(false)
    }

    const ChangeName = (data) => {
        patchUserData(data, id, token)
        setNameInput(false)
        setRestaurantName(data.name)
    }

    const ChangeMail = () => {
        const data = {
            email: restaurantEmail
        }

        const patch = async () => {
            const response = await patchUserData(data, id, token, "Email atualizado com sucesso!", "Email inválido.")
            if (response === true) {
                setRestaurantEmail(restaurantEmail)
            } else {
                setRestaurantEmail(email)
            }
        }

        patch()
        setEmailInput(false)
    }

    const ChangePass = (data) => {
        const pass = {
            password: data.password
        }

        patchUserData(pass, id, token, "Senha atualizada com sucesso!")
        reset()
    }

    useEffect(() => {
        const getInfo = async () => {
            const response = await getUserData(id, token)
            setUserInfo(response)
            setRestaurantName(response.name)
            setRestaurantEmail(response.email)

            setImage(response.logoUrl)
            setDefaultImage(response.logoUrl)
        }
        getInfo()
    }, [])

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
                                <img src={image} alt={name} />
                                <figcaption>{name}</figcaption>
                            </FigureStyled>
                            {!imageInput && 
                                <label htmlFor="uploadImage">Trocar</label>
                            }
                            
                            <input type="file"
                                id="uploadImage"
                                style={{ display: "none" }}
                                onChange={(e) => seeImage(e.target.files[0])} />

                            {imageInput && (
                                <>
                                    <Button onClick={() => sendImage()}>Confirmar</Button>
                                    <Button onClick={() => cancelChangeImage()}>Cancelar</Button>
                                </>
                            )}
                        </ImageContainer>
                        <FormNameContainer onSubmit={handleSubmit(ChangeName)}>
                            {!!errors.name && <FormError>{errors.name.message}</FormError>}
                            {!nameInput && <h3>{restaurantName}</h3>}
                            {nameInput &&
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name")}
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
                            {!emailInput &&
                                <p>Seu endereço de email é <strong>{restaurantEmail}</strong></p>
                            }
                            {emailInput &&
                                <p>Seu endereço de email é
                                    <input
                                        type="email"
                                        id="email"
                                        onChange={(e) => setRestaurantEmail(e.target.value)}
                                    />
                                </p>
                            }

                            {!emailInput &&
                                <button onClick={() => setEmailInput(true)}>Trocar</button>
                            }
                            {emailInput &&
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
                                    {...register2("password")}
                                />
                                {!!errors2.password && <FormError>{errors2.password.message}</FormError>}
                            </PasswordDiv>
                            <PasswordDiv>
                                <span>Confirmar senha</span>
                                <input
                                    type="password"
                                    id="passwordConfirmation"
                                    {...register2("passwordConfirmation")}
                                />
                                {!!errors2.passwordConfirmation && <FormError>{errors2.passwordConfirmation.message}</FormError>}
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