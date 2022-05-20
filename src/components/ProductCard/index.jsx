import { CardContainer } from "./style";
import { useLocation } from "react-router-dom";

const ProductCard = ({
  product,
  productImage,
  setOpenEditProduct,
  setProductToBeEdited,
  setOpenRemoveProduct,
  click
}) => {
  const { name, description, id } = product;

  let location = useLocation();

  return (
    <CardContainer key={id}>
      <section className="card--product">
        <div className="product--imageContainer">
          <img src={productImage} alt={name} />
        </div>
        <div className="product--description">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </section>
      <section className="card--extras">
        {/* Verifica em quais das páginas está para renderizar o botão necessário */}
        {location.pathname === "/menu" && (
          <button onClick={click}>Ver Porções</button>)}
        {location.pathname === "/admin" && (
          <div>
            <button
              onClick={() => {
                setProductToBeEdited(product);
                setOpenEditProduct(true);
              }}
            >
              Editar
            </button>
            <button
              onClick={() => {
                setProductToBeEdited(product);
                setOpenRemoveProduct(true);
              }}
            >
              Remover
            </button>
          </div>
        )}
      </section>
    </CardContainer>
  );
};
export default ProductCard;
