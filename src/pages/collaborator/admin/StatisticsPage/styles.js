import styled from 'styled-components'
export const Container = styled.main`
background: linear-gradient(
 135deg,
 var(--primary-color-50),
 var(--primary-color)
);
min-height: 100vh;
width:100vw;
@media (min-width: 1024px) {
 display: flex;
 justify-content: space-between;
}
`
export const BoxContent = styled.div`
  width: 80%;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .LineDivBox {
    width: 90%;
    border: 1px solid var(--primary-color);
    margin: 10px auto;
  }
  @media (min-width:1024px){
    width:87%;
    justify-content:flex-start;
    margin: 20px 60px 20px auto;
  }
`
export const ContentDemand = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 15px;
  }
`;
export const Title = styled.h1`
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 32px;
  margin: 10px 0;
`;
export const Subtitle = styled.h2`
  color: var(--terciary-color);
  font-size: 16px;
  margin-top: 15px;
`;
export const LineDiv = styled.hr`
  width: 100%;
  border: 1px dashed var(--secondary-color);
  margin: 10px 0;
`;
export const ContentControl =styled.div`
  width:100%;
  @media (min-width:1024px){
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items: flex-start;
    gap:15px;
  }
`
export const ControlItems = styled.div`
  width: 100%;
  background-color: var(--terciary-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 190px;
  border-radius:16px;
  padding-bottom:10px;
  /* overflow-y: auto;
  

    ::-webkit-scrollbar-thumb {
      background: var(--secondary-color-50);
      border-radius: 10px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      background-color: var(--primary-color-50);
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--primary-color-50);
      border-radius: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
    } */
  ul {
    width: 90%;
    margin: 0 auto;
  }
  li {
    display: flex;
    justify-content: space-between;
  }
   @media (min-width:1024px){
    min-height:250px;
  }
`;
export const TitleBox = styled.h3`
  margin: 10px 0;
  font-size: 16px;
`;
export const AllRaised = styled.div`
  width: 100%;
  background-color: var(--terciary-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  min-height: 190px;
  border-radius:16px;
  padding-bottom:10px;
  @media (min-width:1024px){
    margin-top:0;
    min-height:250px;
  }
`;
