import { ButtonStyled } from "./styled";

const Button = ({children, bgBlack, bgYellow, bolder, circle, ...rest}) => {
    return(
        <ButtonStyled bgBlack={bgBlack} bgYellow={bgYellow} bolder={bolder} circle={circle} {...rest}>
            {children}
        </ButtonStyled>
    )
}
export default Button