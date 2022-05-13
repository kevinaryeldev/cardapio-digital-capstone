import Menu from "../../../../components/Menu"
import Button from "../../../../components/Button";

import { ChangeColors, ChangeEmail, ChangePassword, ConfigContainer, Container, FigureStyled, ImageContainer, Main, MainInfo, NameContainer, PasswordContainer, PasswordDiv, SelectColor } from "./style"

import Logo from "../../../../assets/img/Logo.png";

const ProfilePage = () => {
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
                                <figcaption>"RESTAURANTE"</figcaption>
                            </FigureStyled>
                            <Button bgYellow>Trocar</Button>
                        </ImageContainer>
                        <NameContainer>
                            <h3>Nome do Restaurante</h3>
                            <span>Modificar nome</span>
                        </NameContainer>
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
                            <p>Seu endereço de email é <strong>capstone.m3@mail.com</strong></p>
                            <span>Trocar</span>
                        </div>
                    </ChangeEmail>
                    <ChangePassword>
                        <h6>Senha</h6>
                        <PasswordContainer>
                            <PasswordDiv>
                                <span>Nova senha</span>
                                <input type="password" />
                            </PasswordDiv>
                            <PasswordDiv mid>
                                <span>Confirmar senha</span>
                                <input type="password" />
                            </PasswordDiv>
                            <span>Salvar nova senha</span>
                        </PasswordContainer>
                    </ChangePassword>
                </ConfigContainer>
            </Main>
        </Container>
    )
}
export default ProfilePage