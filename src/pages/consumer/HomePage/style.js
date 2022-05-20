import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--primary-color);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .title{
        display: flex;
        width: 100vw;
        justify-content: center;
    }

    h1{
        color: var(--secondary-color-50);
        font-size: 44px;
    }

    p{
        color: var(--secondary-color-50);
        margin: 2rem 0rem 2rem 0rem;
        font-size: 20px;
    }

    div{
        width: 100px;
    }

    img{
        max-width: 90vw;
    }
`

export const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

div:last-child {
    width: 100%;
    text-align: center;
    margin-top: 15px;
    padding-top: 5px;
    color: var(--secondary-color-50);
    border-top: 1px solid var(--terciary-color);

    select {
        color: var(--secondary-color-50);
        background-color: transparent;
        padding: 5px;
        margin-top: 10px;
        border-radius: 5px;
    }

    option {
        width: 20px;
        background-color: var(--terciary-color);
    }
}

`