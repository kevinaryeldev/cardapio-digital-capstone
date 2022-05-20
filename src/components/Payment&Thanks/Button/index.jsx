import PaymentThanksModal from "../index";
import { useMenu } from "../../../providers/menu/menu";
import Button from "../../Button";
import Modal from "../../Modal";

import { IoMdCash } from "react-icons/io";

const PaymentButton = () => {
  const { isPaymentModalOpen, setIsPaymentModalOpen } = useMenu();

  return (
    <>
      <Button circle bgYellow onClick={() => setIsPaymentModalOpen(true)}>
        <IoMdCash size={70} />
      </Button>
      {isPaymentModalOpen === true && (
        <Modal state height={301} width={713} top={"30%"} left={"15%"}>
          <PaymentThanksModal />
        </Modal>
      )}
    </>
  );
};
export default PaymentButton;
