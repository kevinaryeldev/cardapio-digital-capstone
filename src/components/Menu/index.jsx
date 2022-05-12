import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/Logo.png";
import {
  BiUserCircle,
  BiHome,
  BiEnvelope,
  BiMenu,
  BiLogOut,
} from "react-icons/bi";
import { FaConciergeBell, FaRegBell } from "react-icons/fa";

import { Header, BoxImage, LineDiv } from "./styles";

const Menu = () => {
  return (
    <>
      <Header>
        <BoxImage>
            <img src={Logo} alt="Logotipo"/>
        </BoxImage>

        <BiMenu className="Menu"></BiMenu>

        <Link to="">
          <FaRegBell></FaRegBell>
        </Link>
        <Link to="">
          <BiHome></BiHome>
        </Link>
        <Link to="">
          <BiEnvelope></BiEnvelope>
        </Link>
        <Link to="">
          <FaConciergeBell></FaConciergeBell>
        </Link>
        <Link to="">
          {" "}
          <BiUserCircle></BiUserCircle>
        </Link>
        <Link to="">
          {" "}
          <BiLogOut className="btnLogout"></BiLogOut>
        </Link>
      </Header>
      <LineDiv></LineDiv>
    </>
  );
};
export default Menu;
