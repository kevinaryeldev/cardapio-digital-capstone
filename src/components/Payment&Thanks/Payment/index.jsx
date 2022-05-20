import { ButtonImage, CloseButton, PaymentDiv, PaymentSection } from "./style";

import Pix from "../../../assets/img/Pix.png";
import Mastercard from "../../../assets/img/Mastercard.png";
import Visa from "../../../assets/img/Visa.png";
import BancoBrasil from "../../../assets/img/Banco-do-Brasil.png";
import CardMachine from "../../../assets/img/Card-Machine.png";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useMenu } from "../../../providers/menu/menu";

const PaymentModal = ({ setIsPayed }) => {
  const { setIsPaymentModalOpen } = useMenu();

  return (
    <PaymentDiv>
      <CloseButton onClick={() => setIsPaymentModalOpen(false)}>X</CloseButton>
      <h2>Escolha como quer pagar</h2>
      <PaymentSection>
        <button onClick={() => setIsPayed(true)}>
          <ButtonImage src={Pix} />
        </button>
        <button onClick={() => setIsPayed(true)}>
          <ButtonImage src={Mastercard} />
        </button>
        <button onClick={() => setIsPayed(true)}>
          <ButtonImage src={Visa} />
        </button>
        <button onClick={() => setIsPayed(true)}>
          <ButtonImage src={BancoBrasil} />
        </button>
        <button onClick={() => setIsPayed(true)}>
          <ButtonImage card src={CardMachine} />
        </button>
        <button onClick={() => setIsPayed(true)}>
          <FaMoneyBillAlt size={60} />
        </button>
      </PaymentSection>
    </PaymentDiv>
  );
};
export default PaymentModal;
