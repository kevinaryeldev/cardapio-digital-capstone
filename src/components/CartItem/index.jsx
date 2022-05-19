import {
  LeftCartItemContainer,
  StarRatingCart,
  CartItemContainer,
  RightCartItemContainer,
} from "./style";
import StarDarkGray from "./../../assets/img/stars/StarDarkGray.svg";
import StarGray from "../../assets/img/stars/StarGray.svg";
import formatter from "../../utils/formatter";

const CartItem = ({ product, portions, extras }) => {
  const { name, description, rating, imageUrl, id, time } =
    product;

    const portionsVinculated = !!portions && portions.filter(portion => portion.productName === product.name)
    const extrasVinculated = !!extras && extras.filter(extra => extra.productName === extra.name)
    const portionsTotalValue = portions ? portionsVinculated.reduce((acumulate, current) => {
      return acumulate + Number(current.price)
    }, 0) : 0
    const extrasTotalValue = extras ? extrasVinculated.reduce((acumulate, current) => {
      return acumulate + Number(current.price)
    }, 0) : 0
    const totalPrice = portionsTotalValue + extrasTotalValue

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
              return <img key={"starRatingCartDarkGray" + index} src={StarDarkGray} alt="Estrela" />;
            } else {
              return <img key={"starRatingCartGray" + index} src={StarGray} alt="Estrela" />;
            }
          })}
        </StarRatingCart>
      </LeftCartItemContainer>
      <RightCartItemContainer>
        <h2>{name}</h2>
        <h3>
          {formatter.format(totalPrice)}
        </h3>
        <p>{description}</p>
        <p>Tempo de espera: {time}min</p>
        <a href="#">Ver valor nutricional</a>
      </RightCartItemContainer>
    </CartItemContainer>
  );
};
export default CartItem;
