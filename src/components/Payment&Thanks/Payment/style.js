import styled from 'styled-components'

export const PaymentDiv = styled.div`
background-color: var(--secondary-color);
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 32px 49px 32px;
width: 485px;

    h2 {
        margin-bottom: 50px;
        font-size: 32px;
    }

    
`

export const CloseButton = styled.button`
background-color: transparent;
color: var(--error-color);
border-bottom: 1px solid var(--primary-color);
border-left: 1px solid var(--primary-color);
border-radius: 0px 0px 0px 3px;
padding: 5px;
position: absolute;
top: 0;
right: 0;
`

export const PaymentSection = styled.section`
display: flex;
width: 100%;
justify-content: space-between;

button {
    width: 70px;
    height: 63px;
    background-color: transparent;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid black;
        border-radius: 5px;
    }
}
`

export const ButtonImage = styled.img`
width: ${(props) => (props.card ? "66px" : "inherit")};
height:  ${(props) => (props.card ? "54px" : "inherit")};

`