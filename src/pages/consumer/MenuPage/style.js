import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    height: 100vh;
    width: 100vw;
    overflow: scroll;

    .mobile--nav{
        visibility: hidden;
    }

    .desktop--nav{
        display: flex;
        justify-content: space-around;
        font-family: 'Noto serif', serif;
        color: var(--primary-color);
        font-weight: bold;
        padding: 15px 5px;
        background-color: var(--secondary-color);

        a:hover{
            color: var(--primary-color-50);
        }
    }

    .foodsection{
        margin: 3rem 4rem;
        padding: 2rem;
        color: var(--secondary-color-50);
        font-weight: bold;
        border-top: 1px solid var(--secondary-color-50);
        border-bottom: 1px solid var(--secondary-color-50);
    }

    .product-modal{
        display: flex;
        flex-direction: column;
        background-color:  var(--secondary-color);
    }

    @media screen and (max-width: 500px){
        .desktop--nav{
            display: none;
        }

    }
`

export const Content = styled.div`
    margin: 0rem 0rem 3rem 4rem;
`