import Prop from "prop-types";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

interface IProps {
  text?: string | null | undefined | JSX.Element;
  backgroundColor?: string;
  onClick?: (e: any) => void;
  textColor?: string;
  linkTo?: string;
}

const TextButton: React.FC<IProps> = ({
  text,
  backgroundColor,
  textColor,
  onClick,
  linkTo,
}) => {
  return (
    <Link to={linkTo || "#"}>
      <button
        className={styles.button}
        style={{ backgroundColor, color: textColor }}
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
};

TextButton.defaultProps = {
  text: "Click",
  backgroundColor: "#3EB259",
  onClick: (e) => {},
  textColor: "#fff",
};

TextButton.propTypes = {
  backgroundColor: Prop.string,
  textColor: Prop.string,
};

export default TextButton;
