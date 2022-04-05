import Prop from "prop-types";
import styles from "./button.module.css";

interface IProps {
  text?: string | null | undefined | JSX.Element;
  backgroundColor?: string;
  onClick?: (e: any) => void;
  textColor?: string;
}

const TextButton: React.FC<IProps> = ({
  text,
  backgroundColor,
  textColor,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
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
