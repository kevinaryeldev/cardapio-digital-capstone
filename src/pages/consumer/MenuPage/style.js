import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;

    header{
        display: flex;
        justify-content: space-around;
        font-family: 'Noto serif', serif;
        color: var(--primary-color);
        font-weight: bold;
        width: 100vw;
        max-width: 100vw;
        padding: 15px;
        background-color: var(--secondary-color);
    }
`