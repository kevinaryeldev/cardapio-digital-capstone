import {
  LeftContainer,
  NavbarContainer,
  RightContainer,
  NavbarButton,
  ModalLinksButton,
  MainDescription,
  SectionTitle,
  SectionLanding,
  SectionAboutUs,
  TopicAboutUs,
  SectionTestimony,
  ModalNav,
  SliderTestimony,
} from "./style.js";

import TabletAboutUs from "./../../../img/Tablet-AboutUs.png";
import TabletLandingPage from "./../../../img/Tablet-LandingPage.png";
import DinnerAboutUs from "./../../../img/Dinner-AboutUs.png";
import DashboardAboutUs from "./../../../img/Dashboard-AboutUs.png";
import { FaBars } from "react-icons/fa";

import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const LandingPage = () => {
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <div>
      <NavbarContainer>
        <LeftContainer>
          <ModalLinksButton
            onClick={() => {
              setOpenLinks((curr) => !curr);
            }}
          >
            {openLinks ? (
              <AiOutlineClose />
            ) : (
              <>
                <FaBars />
              </>
            )}
          </ModalLinksButton>
          <h2>Cardápio Digital</h2>
        </LeftContainer>
        <RightContainer>
          <NavbarButton>Login</NavbarButton>
          <NavbarButton>Cadastre-se</NavbarButton>
        </RightContainer>
      </NavbarContainer>
      {openLinks && (
        <ModalNav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutUs">Sobre Nós</a>
            </li>
            <li>
              <a href="#testimony">Depoimentos</a>
            </li>
          </ul>
        </ModalNav>
      )}

      <SectionLanding id="home">
        <SectionTitle>Aplicativo de Cardápio Digital</SectionTitle>
        <MainDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500. Modernize seu estabelecimento alimentício com a
          aplicação do futuro!
        </MainDescription>
        <img src={TabletLandingPage} alt="" />
      </SectionLanding>

      <SectionAboutUs id="aboutUs">
        <SectionTitle>Sobre nós</SectionTitle>
        <ul>
          <TopicAboutUs>
            <div>
              <div className="decoration"></div>
              <img src={TabletAboutUs} alt="Nossa Aplicação" />
            </div>
            <section>
              <h2>Sustentável</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
          </TopicAboutUs>
          <TopicAboutUs>
            <section>
              <h2>Maior privacidade</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <div>
              <img src={DinnerAboutUs} alt="Exemplo Mesa de Restaurante" />
              <div className="decoration"></div>
            </div>
          </TopicAboutUs>
          <TopicAboutUs>
            <div>
              <img src={DashboardAboutUs} alt="Nossa Aplicação - Dashboard" />
              <div className="decoration"></div>
            </div>
            <section>
              <h2>Controle total do restaurante</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
          </TopicAboutUs>
        </ul>
      </SectionAboutUs>

      <SectionTestimony id="testimony">
        <SectionTitle>Depoimentos</SectionTitle>
        <SliderTestimony> </SliderTestimony>
      </SectionTestimony>
    </div>
  );
};
export default LandingPage;

