import { ButtonStyled } from "./styled";

const Button = ({children, bgBlack, bgYellow, bolder, circle, width, ...rest}) => {
    return(
        <ButtonStyled bgBlack={bgBlack} bgYellow={bgYellow} bolder={bolder} circle={circle} width={width} {...rest}>
            {children}
        </ButtonStyled>
    )
}
export default Button