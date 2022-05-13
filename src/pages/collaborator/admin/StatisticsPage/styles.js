import styled from 'styled-components'

export const Container = styled.section`
  background-color: var(--primary-color);
  @media (min-width: 1024px) {
    display: flex;
  }
`;
export const BoxContent = styled.div`
  width: 90%;
  margin: 0 auto;
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
  }
`;
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
    align-items: center;
    gap:15px;
  }
`
export const ControlItems = styled.div`
  width: 100%;
  background-color: var(--terciary-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 190px;
  border-radius:16px;
  ul {
    width: 90%;
    margin: 0 auto;
  }
  li {
    display: flex;
    justify-content: space-between;
  }
   @media (min-width:1024px){
    height:250px;
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
  height: 190px;
  border-radius:16px;
  @media (min-width:1024px){
    margin-top:0;
    height:250px;
  }
`;
