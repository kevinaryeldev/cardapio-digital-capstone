import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../providers/user/user";

import Logo from "../../assets/img/Logo.png";
import {
  BiUserCircle,
  BiHome,
  BiEnvelope,
  BiMenu,
  BiLogOut,
} from "react-icons/bi";
import { FaConciergeBell, FaRegBell } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

import { Header, BoxImage, NavMenuMobile } from "./styles";

const Menu = () => {
  const [showMenuMobile, setShowMobile] = useState(false);
  const showMenu = () => {
    showMenuMobile === false ? setShowMobile(true) : setShowMobile(false);
    setTimeout(() => {
      setShowMobile(false);
    }, 4000);
  };
  const { logout } = useAuth();
  return (
    <>
      <Header>
        <BoxImage>
          <img src={Logo} alt="Logotipo" />
        </BoxImage>

        <BiMenu className="Menu" onClick={showMenu}></BiMenu>

        {showMenuMobile && (
          <NavMenuMobile>
            <Link to="/admin/requests" className="links">
              <FaRegBell className="icons"></FaRegBell>Requisiçoes
            </Link>
            <Link to="/admin/statistics" className="links">
              <BiHome className="icons"></BiHome>Estatisticas
            </Link>
            <Link to="/admin/feedbacks" className="links">
              <BiEnvelope className="icons"></BiEnvelope>Feedbacks
            </Link>
            <Link to="/admin" className="links">
              <FaConciergeBell className="icons"></FaConciergeBell>Comandas
            </Link>
            <Link to="/admin/profile" className="links">
              <BiUserCircle className="icons"></BiUserCircle>Perfil
            </Link>
            <Link to="/home" className="links">
              <MdRestaurantMenu className="icons"></MdRestaurantMenu>
              Área do Cliente
            </Link>
            <Link to="" className="links">
              <BiLogOut onClick={logout} className="icons"></BiLogOut> Logout
            </Link>
          </NavMenuMobile>
        )}

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

        <Link to="/home">
          <MdRestaurantMenu></MdRestaurantMenu>
        </Link>

        <Link to="">
          <BiLogOut className="btnLogout" onClick={logout}></BiLogOut>
        </Link>
      </Header>
    </>
  );
};
export default Menu;
