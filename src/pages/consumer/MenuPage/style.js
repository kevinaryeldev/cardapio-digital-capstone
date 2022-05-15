import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    height: 100vh;
    width: 100vw;

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

    @media screen and (max-width: 500px){
        .desktop--nav{
            display: none;
        }

        .mobile--nav{
            visibility: visible;
            background-color: var(--secondary-color);
            padding: 10px;

            div{
                display: flex;
                align-items: center;
                background-color: var(--primary-color);
                border-radius: 10px;
                width: 70vw;
                margin-left: 10px;
                padding: 12px 10px;

                input{
                    background-color: var(--primary-color);
                    width: 100%;
                    color: white;
                    margin-left: 10px;
                    /* padding: 0px 0px 5px 10px; */
                }
            }
        }
    }
`

export const Content = styled.div`
    margin: 0rem 4rem;
`