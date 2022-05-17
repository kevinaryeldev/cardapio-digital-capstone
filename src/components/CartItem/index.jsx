import {
  LeftCartItemContainer,
  StarRatingCart,
  CartItemContainer,
  RightCartItemContainer,
} from "./style";
import StarDarkGray from "./../../assets/img/stars/StarDarkGray.svg";
import StarGray from "../../assets/img/stars/StarGray.svg";

const CartItem = ({ product }) => {
  const { name, description, rating, imageUrl, id, portion, price, time } =
    product;

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
          {ratingStars.map((state) => {
            if (state === "full") {
              return <img src={StarDarkGray} alt="Estrela" />;
            } else {
              return <img src={StarGray} alt="Estrela" />;
            }
          })}
        </StarRatingCart>
      </LeftCartItemContainer>
      <RightCartItemContainer>
        <h2>{name}</h2>
        <h3>
          {price}-{portion}
        </h3>
        <p>{description}</p>
        <p>Tempo de espera: {time}min</p>
        <a href="#">Ver valor nutricional</a>
      </RightCartItemContainer>
    </CartItemContainer>
  );
};
export default CartItem;
