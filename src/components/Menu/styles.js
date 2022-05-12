import styled from "styled-components";

export const Header = styled.section`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: var(--primary-color);
  position:relative;
  & a {
    display: none;
  }
  .Menu{
    color:white;
    font-size:32px;
    justify-self: flex-end ;
    position:absolute;
    right: 20px;
    cursor:pointer;
  }
  .Menu:hover{
    color:var(--secondary-color);
  }
  
@media (min-width:1024px){
  width:80px;
  height:100vh;
  flex-direction: column;
  align-items: center;
 
  & a{
     display:block;
     color:var(--terciary-color);
     font-size:32px;
     margin-top: 20px;
     cursor:pointer; 
  }
  & a:hover{
    color:var(--secondary-color);
  } 
  .Menu{
    display:none;
  }
  .btnLogout{
    position:absolute;
    bottom:15px;
    left:20px;
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
    & img{
      width:45px;
      height:45px;
    }
@media (min-width: 1024px){
    width:100%;
    height: 60px; 
}
`
export const LineDiv = styled.div`
  width: 100%;
  height: 3px;
  background-color: var(--secondary-color);
@media (min-width:1024px){
  height:100%;
  width: 3px;
  position: absolute;
  left:80px;
  top:0;
}
`

;