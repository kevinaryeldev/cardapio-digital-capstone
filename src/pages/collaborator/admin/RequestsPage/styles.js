import styled from "styled-components";

 export const Container = styled.main`
 background: linear-gradient(
  135deg,
  var(--primary-color-50),
  var(--primary-color)
);
min-height: 100vh;
width:100vw;
@media (min-width: 1024px) {
  width: 100vw;
  display: flex;
  justify-content: space-between;
}
`
export const BoxContent = styled.section`
width: 80%;
margin: 20px auto;
@media (min-width:1024px){
    width:87%;
    justify-content:flex-start;
    margin: 20px 60px 20px auto;
  }
`
export const InputArea = styled.div`
  width: 100%;
  height: 30px;
  background-color: var(--terciary-color);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px;

  @media (min-width: 1024px) {
    width: 350px;
    height: 40px;
    margin-left: auto;
    input {
      height: 100%;
      width: 80%;
      background-color: inherit;
    }
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  color: var(--terciary-color);
  margin: 10px 0;
`;
export const LineDiv = styled.hr`
  border: 1px dashed var(--secondary-color);
`;
export const BoxNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  @media (min-width: 1024px) {
    width: 500px;
    margin: 10px 0;
  } ;
`;
export const Btnfilter = styled.button`
  border: 1px solid
    ${(props) =>
      props.color === "g"
        ? "var(--positive-color)"
        : props.color === "r"
        ? "var(--negative-color)"
        : props.color === 'y' 
        ? "var(--alert-color)"
        : "var(--primary-color-50)"};
  color: ${(props) =>
      props.color === "g"
        ? "var(--positive-color)"
        : props.color === "r"
        ? "var(--negative-color)"
        : props.color === 'y' 
        ? "var(--alert-color)"
        : "var(--primary-color-50)"};
  width: 60px;  
  display: flex;
  align-items: center;
  justify-content: center;
  gap:5px;
  height:35px;
  :hover {
    background-color: ${(props) =>
      props.color === "g"
        ? "var(--positive-color)"
        : props.color === "r"
        ? "var(--negative-color)"
        : props.color === 'y' 
        ? "var(--alert-color)"
        : "var(--secondary-color)"};
    color: var(--terciary-color);
  }
  @media (min-width: 1024px) {
    width: 120px;
    height: 40px;
    font-size: 18px;
  }
`
export const BoxCardReq = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  gap: 50px;
  width: 100%;
  @media (min-width: 1024px) {
    max-height: 70vh;
    overflow-y: auto;
    justify-content:flex-start;

    ::-webkit-scrollbar-thumb {
      background: var(--secondary-color-50);
      border-radius: 10px;
    }
    ::-webkit-scrollbar {
      width: 10px;
      background-color: var(--primary-color-50);
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--primary-color-50);
      border-radius: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;
