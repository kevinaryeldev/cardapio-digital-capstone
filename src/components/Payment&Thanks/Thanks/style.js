import styled from 'styled-components'

export const ThanksDiv = styled.div`
background-color: var(--secondary-color);
display: flex;
flex-direction: column;
align-items: center;
padding: 9px 22px;
width: 485px;

    h2 {
        margin-bottom: 50px;
        font-size: 32px;
    }

    
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

    label {
        font-weight: 700;
        font-size: 20px;
    }
`

export const TextSection = styled.section`
background-color: var(--primary-color-50);
display: flex;
align-items: center;
padding: 5px;
margin-top: 50px;
width: 100%;

textarea {
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    resize: none;
    margin-right: 4px;
    width: 100%;
    color: var(--terciary-color);
    padding-left: 10px;
}

button {
    width: 111px;
}
`
