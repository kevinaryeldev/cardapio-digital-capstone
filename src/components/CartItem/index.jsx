import {
  LeftCartItemContainer,
  StarRatingCart,
  CartItemContainer,
  RightCartItemContainer,
} from "./style";
import StarDarkGray from "./../../assets/img/stars/StarDarkGray.svg";
import StarGray from "../../assets/img/stars/StarGray.svg";
import formatter from "../../utils/formatter";

const CartItem = ({ product }) => {
  const {
    extras,
    name,
    description,
    portionsPrice,
    extrasPrice,
    rating,
    imageUrl,
    id,
    waitingTime,
    portions,
  } = product;

  const totalPrice = portionsPrice + extrasPrice;

  let ratingStars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingStars.push("full");
    } else {
      ratingStars.push("empty");
    }
  }
  return (
    <CartItemContainer key={id}>
      <LeftCartItemContainer>
        <img src={imageUrl} alt={name} />
        <StarRatingCart>
          {ratingStars.map((state, index) => {
            if (state === "full") {
              return (
                <img
                  key={"starRatingCartDarkGray" + index}
                  src={StarDarkGray}
                  alt="Estrela"
                />
              );
            } else {
              return (
                <img
                  key={"starRatingCartGray" + index}
                  src={StarGray}
                  alt="Estrela"
                />
              );
            }
          })}
        </StarRatingCart>
      </LeftCartItemContainer>
      <RightCartItemContainer>
        <h2>{name}</h2>
        <h3>
          {formatter.format(extrasPrice ? totalPrice : portionsPrice)} -{" "}
          {portions[0].name}
          {extras &&
            extras.map((el) => {
              return (
                <>
                  {" + "}
                  {el.name}
                </>
              );
            })}
        </h3>
        <p>{description}</p>
        <p>Tempo de espera: {waitingTime}min</p>
        <a href="#">Ver valor nutricional</a>
      </RightCartItemContainer>
    </CartItemContainer>
  );
};
export default CartItem;
