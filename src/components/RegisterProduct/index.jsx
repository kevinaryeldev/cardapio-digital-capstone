import { useState } from "react";

import Modal from "../Modal";
import { CloseModal, Container } from "./style.";

import { AiOutlineCloseCircle } from "react-icons/ai";

import FormInfos from "./FormInfos";
import FormExtras from "./FormExtras";
import FormPortions from "./FormPortions";
import { useMenu } from "../../providers/menu/menu";
import { listProductApi } from "../../services/products/products";
import { useProducts } from "../../providers/products/products";
const RegisterProduct = ({
  openModal,
  setOpenModal,
  type,
  productToBeEdited,
}) => {
  const { setProducts } = useProducts();
  const [stage, setStage] = useState(1);
  const [registerData, setRegisterData] = useState(
    productToBeEdited || {
      imageUrl:
        "https://th.bing.com/th/id/R.66abeb56038e63e5ab4ee3bb8070ccbf?rik=n%2fJP378XqPOtag&pid=ImgRaw&r=0",
      name: "",
      description: "",
      category: "",
      waitingTime: "",
      extras: [],
      portions: [],
    }
  );

  const { addProduct, editProduct } = useMenu();

  const onSubmitRegister = async () => {
    const userId = JSON.parse(window.localStorage.getItem("@SmartMenu:id"));
    let response;
    if (type === "register") {
      response = await addProduct({ ...registerData, userId });
    } else if (type === "edit") {
      response = await editProduct(productToBeEdited.id, { ...registerData });
    }
    if (response) {
      setOpenModal(false);
      listProductApi(setProducts);
    }
  };

  return (
    <Modal
      setState={setOpenModal}
      state={openModal}
      flex
      // width="100vw"
      // align="center"
      // justify="center"
      padding="15px"
    >
      <Container>
        <h1>{type === "register" ? "Adicionar" : "Editar"} um produto</h1>
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

        <CloseModal onClick={() => setOpenModal(false)}>
          <AiOutlineCloseCircle size="24px" />
        </CloseModal>
      </Container>
    </Modal>
  );
};

export default RegisterProduct;
