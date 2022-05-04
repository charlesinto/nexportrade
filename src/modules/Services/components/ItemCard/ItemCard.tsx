import styles from "./index.module.css";
import Prop from "prop-types";
import TextButton from "../../../../components/TextButton/TextButton";
import arrowForward from "../../../../assets/svg/arrowForward.svg";
import { Link } from "react-router-dom";

interface IProps {
  title?: string | JSX.Element;
  subTitle?: string;
  bannerImage?: string;
  linkTo?: string;
}

const ItemCard: React.FC<IProps> = ({
  bannerImage,
  title,
  subTitle,
  linkTo,
}) => {
  return (
    <Link className={styles.linkWrapper} to={linkTo || "#"}>
      <div className={styles.wrapper}>
        <img src={bannerImage} style={{ objectFit: "cover" }} alt="card" />
        <div className="mt-3">{title}</div>
        <article>{subTitle}</article>
        <TextButton
          text={
            <span className="d-flex align-items-center">
              <span style={{ textTransform: "uppercase" }}>Learn More</span>
              <img
                style={{ width: 24, height: 24, objectFit: "cover" }}
                alt="arrow"
                className="px-2"
                src={arrowForward}
              />
            </span>
          }
          backgroundColor="#fff"
          textColor={"#3EB259"}
        />
      </div>
    </Link>
  );
};

ItemCard.defaultProps = {
  linkTo: "",
  title: "Commision Agency",
  bannerImage: `${require("../../../../assets/svg/placeholder1.webp")}`,
  subTitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
};

ItemCard.propTypes = {
  title: Prop.any,
  subTitle: Prop.string,
  bannerImage: Prop.any,
  linkTo: Prop.string,
};

export default ItemCard;
