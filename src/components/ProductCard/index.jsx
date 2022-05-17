import { CardContainer } from "./style";
import StarYellow from "../../assets/img/stars/StarYellow.svg";
import StarGray from "../../assets/img/stars/StarGray.svg";
import { useLocation } from "react-router-dom";

//FALTA ADICIONAR OS ONCLICKS DOS BOTÕES DE EDITAR E REMOVER

const ProductCard = ({ product, setOpenEditProduct, setProductToBeEdited }) => {
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
      <section className="card--product">
        <div className="product--imageContainer">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="product--description">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </section>

      <section className="card--extras">
        <div className="card--ratingContainer">
          {ratingStars.map((state, index) => {
            if (state === "full") {
              return (
                <img
                  key={"starYellow" + index}
                  src={StarYellow}
                  alt="Estrela"
                />
              );
            }
            return (
              <img key={"starGray" + index} src={StarGray} alt="Estrela" />
            );
          })}
        </div>
        {/* Verifica em quais das páginas está para renderizar o botão necessário */}
        {location.pathname === "/menu" && <button>Ver Porções</button>}
        {location.pathname === "/admin" && (
          <>
            <button
              onClick={() => {
                setProductToBeEdited(product);
                setOpenEditProduct(true);
              }}
            >
              Editar
            </button>
            <button>Remover</button>
          </>
        )}
      </section>
    </CardContainer>
  );
};
export default ProductCard;
