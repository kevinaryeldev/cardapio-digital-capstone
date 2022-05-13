import styled from 'styled-components'

export const BoxContent = styled.div`
width:100%;
height:150px;
background-color:var(--terciary-color);
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items: center;
margin: 10px 0;
color:${(props) => (props.color === 'g'? "var(--positive-color)" 
                        : props.color === "r" ? "var(--error-color)" 
                            : props.color === "y" ? "var(--alert-color)":null)};
    .IconBox{
        font-size:44px;
`
export const TitleCard = styled.span`
    font-size: 16px;
    font-weight: normal;
`
export const LineDivCard =styled.div`
    border:1px solid var(--primary-color);
    width:90%;
    margin: 0 auto;   
`