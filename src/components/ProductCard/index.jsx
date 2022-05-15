import { CardContainer } from "./style";
import StarYellow from "../../assets/img/stars/StarYellow.svg";
import StarGray from "../../assets/img/stars/StarGray.svg";
import { useLocation } from "react-router-dom";

//FALTA ADICIONAR OS ONCLICKS DOS BOTÕES DE EDITAR E REMOVER

const ProductCard = ({ product }) => {
  const { name, description, rating, imageUrl, id } = product;

  let ratingStars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingStars.push("full");
    } else {
      ratingStars.push("empty");
    }
  }

  let location = useLocation();

  return (
    <CardContainer key={id}>
      {/*Não precisa desse key => Deve ser colocado Na Dashboard, ao chamar esse componente*/}
      <section className="card--product">
        <div className="product--imageContainer">
          <img src={imageUrl} alt={name} />
          {/* O nome no objeto que vem da api é img e não imageUrl*/}
        </div>
        <div className="product--description">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </section>
      <section className="card--extras">
        <div className="card--ratingContainer">
          {ratingStars.map((state) => {
            /*as imagens precisam receber key pois irão se repetir*/
            if (state === "full") {
              return <img src={StarYellow} alt="Estrela" />;
            }
            return <img src={StarGray} alt="Estrela" />;
          })}
        </div>
        {/* Verifica em quais das páginas está para renderizar o botão necessário */}
        {location.pathname === "/menu" && <button>Ver Porções</button>}
        {/* o pathname da página da dashboard é só admin, não precisa entrar em requests (porque esssa é a dashboard da cozinha) */}
        {location.pathname === "/admin/requests" && (
          <>
            <button>Editar</button>
            <button>Remover</button>
          </>
        )}
      </section>
    </CardContainer>
  );
};
export default ProductCard;
