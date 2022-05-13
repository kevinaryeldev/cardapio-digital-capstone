import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ViewPasswordContainer } from "./style";

function ViewPassword({ onClick, open }) {
  return (
    <ViewPasswordContainer type="button" onClick={onClick}>
      {open ? (
        <FaEye className="viewPassword" size="20px" />
      ) : (
        <FaEyeSlash className="viewPassword" size="20px" />
      )}
    </ViewPasswordContainer>
  );
}

export default ViewPassword;
