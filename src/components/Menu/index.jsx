import React, {useState} from "react";
import { Link } from "react-router-dom";

import {useAuth} from '../../providers/user/user'

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
  const {logout} = useAuth()
  return (
    <>
      <Header>
        <BoxImage>
            <img src={Logo} alt="Logotipo"/>
        </BoxImage>

        <BiMenu className="Menu"></BiMenu>

        <Link to="/admin/requests">
          <FaRegBell></FaRegBell>
        </Link>

        <Link to="/admin/statistics">
          <BiHome></BiHome>
        </Link>

        <Link to="/admin/feedbacks">
          <BiEnvelope></BiEnvelope>
        </Link>

        <Link to="/admin">
          <FaConciergeBell></FaConciergeBell>
        </Link>

        <Link to="/admin/profile">
          <BiUserCircle></BiUserCircle>
        </Link>

        <Link to="" >
          {" "}
          <BiLogOut className="btnLogout" onClick={logout}></BiLogOut>
        </Link>
        
      </Header>
      <LineDiv></LineDiv>
    </>
  );
};
export default Menu;
