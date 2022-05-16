import { useState } from "react";

import Modal from "../Modal";
import { Container } from "./style.";

import FormInfos from "./FormInfos";
import FormExtras from "./FormExtras";
import FormPortions from "./FormPortions";
import { useMenu } from "../../providers/menu/menu";

const RegisterProduct = ({ openRegisterProduct, setOpenRegisterProduct }) => {
  const [stage, setStage] = useState(1);
  const [registerData, setRegisterData] = useState({
    imageUrl:
      "https://th.bing.com/th/id/R.66abeb56038e63e5ab4ee3bb8070ccbf?rik=n%2fJP378XqPOtag&pid=ImgRaw&r=0",
    name: "",
    description: "",
    category: "",
    waitingTime: "",
    extras: [],
    portions: [],
  });

  const { addProduct } = useMenu();

  const onSubmitRegister = async () => {
    const userId = JSON.parse(window.localStorage.getItem("@SmartMenu:id"));

    const response = await addProduct({ ...registerData, userId });

    if (response) {
      setStage(1);
      setRegisterData({
        imageUrl:
          "https://th.bing.com/th/id/R.66abeb56038e63e5ab4ee3bb8070ccbf?rik=n%2fJP378XqPOtag&pid=ImgRaw&r=0",
        name: "",
        description: "",
        category: "",
        waitingTime: "",
        extras: [],
        portions: [],
      });
      setOpenRegisterProduct(false);
    }
  };

  return (
    <Modal
      setState={setOpenRegisterProduct}
      state={openRegisterProduct}
      width="100vw"
      flex
      align="center"
      justify="center"
      padding="15px"
    >
      <Container>
        <h1>Adicione um produto</h1>
        <span className="currentStage">({stage}/3)</span>
        {stage === 1 && (
          <FormInfos
            key="stageOne"
            setStage={setStage}
            setRegisterData={setRegisterData}
            registerData={registerData}
          />
        )}
        {stage === 2 && (
          <FormExtras
            key="stageTwo"
            setStage={setStage}
            setRegisterData={setRegisterData}
            registerData={registerData}
          />
        )}
        {stage === 3 && (
          <FormPortions
            key="stageOne"
            setStage={setStage}
            setRegisterData={setRegisterData}
            registerData={registerData}
            onSubmitRegister={onSubmitRegister}
          />
        )}
      </Container>
    </Modal>
  );
};

export default RegisterProduct;
