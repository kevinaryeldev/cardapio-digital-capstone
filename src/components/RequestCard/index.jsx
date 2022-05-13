import { formatted } from "../../utils/formatter";
import ResponsiveSquare from "../ResponsiveSquare";
import { CardContainer } from "./style";

const RequestCard = ({ product }) => {
  const { table, order, horary, requests, status } = product;

  const quantityTotal = () => {
    return requests.reduce(
      (acc, currentValue) => acc + currentValue.quantity,
      0
    );
  };

  const priceTotal = () => {
    return formatted.format(
      requests.reduce((acc, currentValue) => {
        if (currentValue.promotionalPrice) {
          return acc + currentValue.promotionalPrice * currentValue.quantity;
        }
        return acc + currentValue.price * currentValue.quantity;
      }, 0)
    );
  };

  return (
    <CardContainer>
      <section className="card--header">
        <div className="card--orderHorary">
          <h3>{order}</h3>
          <p>{horary}</p>
        </div>
        <ResponsiveSquare style={{ circle: true, size: "20%" }}>
          {table}
        </ResponsiveSquare>
      </section>

      <ul className="card--requests">
        {requests.map(({ name, imageUrl, quantity }, index) => (
          <li key={index} className="card--request">
            <ResponsiveSquare style={{ circle: true, size: "30%" }}>
              <img src={imageUrl} alt={name} />
            </ResponsiveSquare>

            <div className="request--infos">
              <h4>{name}</h4>
              <span>Qtd.: {quantity}</span>
              <hr className="line" />
            </div>
          </li>
        ))}
      </ul>

      <section className="card--status">
        <div className="card--total">
          <p>
            Qtd.: <span>{quantityTotal()}</span>
          </p>
          <p>Preço: <span>{priceTotal()}</span></p>
        </div>
        <div className="card--actions">
          {status === "opened" ? (
            <>
              <button className="card--accept"></button>
              <button className="card--reject"></button>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </CardContainer>
  );
};
export default RequestCard;
