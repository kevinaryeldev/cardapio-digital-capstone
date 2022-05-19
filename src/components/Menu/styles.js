import styled from "styled-components";

export const Header = styled.section`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: var(--primary-color);
  position: fixed;
  z-index: 10;
  border-bottom: 3px solid var(--secondary-color);

  a {
    display: none;
  }
  .Menu {
    color: white;
    font-size: 32px;
    justify-self: flex-end;
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
  .Menu:hover {
    color: var(--secondary-color);
  }

  @media (min-width: 1024px) {
    width: 80px;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    align-self: baseline;
    border-bottom: none;
    border-right: 3px solid var(--secondary-color);
    a {
      display: block;
      color: var(--terciary-color);
      font-size: 32px;
      margin-top: 20px;
      cursor: pointer;
    }
    a:hover {
      color: var(--secondary-color);
    }
    .Menu {
      display: none;
    }
    .btnLogout {
      position: absolute;
      bottom: 15px;
      left: 20px;
    }
  }
`;
export const NavMenuMobile = styled.nav`
  width: 150px;
  height: 225px;
  background-color: var(--primary-color);
  position: absolute;
  top: 60px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  .links {
    margin-left: 10px;
    display: block !important;
    color: var(--secondary-color);
    font-size: 16px;
    display: flex !important;
    align-items: center !important;
    width: 130px;
    .icons {
      margin-right: 10px;
      margin-left: 5px;
    }
  }
`;

export const BoxImage = styled.figure`
  height: 100%;
  width: 60px;
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 45px;
    height: 45px;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 60px;
  }
`;
