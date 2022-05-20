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
import { useHistory } from "react-router-dom";

import Slider from 'infinite-react-carousel';
import data from "./testimonials"
import Carousel from "../../../components/Carousel/index.jsx";

const LandingPage = () => {
  const history = useHistory();
  const [openLinks, setOpenLinks] = useState(false);

  const settings = {
    arrows: false,
    centerPadding: 10,
    dots: true
  };

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
          <NavbarButton onClick={() => history.push("/login/")}>
            Login
          </NavbarButton>
          <NavbarButton onClick={() => history.push("/signup")}>
            Cadastre-se
          </NavbarButton>
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
          Modernize seu estabelecimento alimentício com a aplicação do futuro!
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
                Defendemos a importância da sustentabilidade em nosso negócio.
              <span>
                <strong> Aplicativo de Cardápio Digital</strong> nasceu com o propósito de diminuir o uso de materiais não sustentáveis para cardápios e comandas de restaurantes.
              </span>
              </p>


            </section>
          </TopicAboutUs>
          <TopicAboutUs invert>
            <div>
              <img src={DinnerAboutUs} alt="Exemplo Mesa de Restaurante" />
              <div className="decoration"></div>
            </div>
            <section>
              <h2>Maior privacidade</h2>
              <p>
                Com este sistema, seus clientes se sentirão mais confortáveis para realizar os seus pedidos. Com o total controle do cardápio em sua mesa, o inconveniente de chamar o garçom se torna praticamente nulo.
              </p>
            </section>
          </TopicAboutUs>
          <TopicAboutUs>
            <div>
              <img src={DashboardAboutUs} alt="Nossa Aplicação - Dashboard" />
              <div className="decoration"></div>
            </div>
            <section>
              <h2>Controle total do restaurante</h2>
              <p>
                Tenha todo o restaurante em suas mãos!
                <span>Crie, modifique seus produtos. Controle o estoque em tempo real. Administre os pedidos e tenha acesso a Feedbacks de clientes.</span>
              </p>
            </section>
          </TopicAboutUs>
        </ul>
      </SectionAboutUs>

      <SectionTestimony id="testimony">
        <SectionTitle>Depoimentos</SectionTitle>

        <SliderTestimony>
          <Slider {...settings}>
            {data.map((testimonial, index) => {
              return <Carousel key={index} testimonial={testimonial} />
            })}
          </Slider>
        </SliderTestimony>

      </SectionTestimony>
    </div>
  );
};
export default LandingPage;

