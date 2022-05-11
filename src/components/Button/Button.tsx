import Prop from "prop-types";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

interface IProps {
  text?: string | null | undefined | JSX.Element;
  backgroundColor?: string;
  onClick?: (e: any) => void;
  textColor?: string;
  linkTo?: string;
  buttonStyle?: React.CSSProperties | undefined;
}

const Button: React.FC<IProps> = ({
  text,
  backgroundColor,
  textColor,
  onClick,
  linkTo,
  buttonStyle,
}) => {
  return (
    <Link to={linkTo || "#"}>
      <button
        className={styles.button}
        style={{ backgroundColor, color: textColor, ...buttonStyle }}
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
};

Button.defaultProps = {
  text: "Click",
  backgroundColor: "#3EB259",
  onClick: (e) => {},
  textColor: "#fff",
};

Button.propTypes = {
  backgroundColor: Prop.string,
  textColor: Prop.string,
};

export default Button;
