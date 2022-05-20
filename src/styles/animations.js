import { keyframes } from "styled-components";

//Move o container com essa animação para um lado e para o outro
export const Shake = keyframes`
    25%{
        transform: translateX(4px);
    }
    
    50%{
        transform: translateX(-4px);
    }

    75%{
        transform: translateX(4px);
    }
`;
