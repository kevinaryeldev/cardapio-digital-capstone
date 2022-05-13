import { DivBlock, DivCentered, DivSquare } from "./style";

const ResponsiveSquare = ({ children, style }) => {
  const {
    size,
    circle,
    childrenWidth = "90%",
    color = {
      border: "",
      shadow: "",
      background: "",
    },
    fontSize = "1rem",
  } = style;

  return (
    <DivSquare size={size} circle={circle}>
      <DivBlock circle={circle} color={color}>
        <DivCentered
          type={children.type}
          width={childrenWidth}
          fontSize={fontSize}
          color={color}
        >
          {children}
        </DivCentered>
      </DivBlock>
    </DivSquare>
  );
};

export default ResponsiveSquare;
