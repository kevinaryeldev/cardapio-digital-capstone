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