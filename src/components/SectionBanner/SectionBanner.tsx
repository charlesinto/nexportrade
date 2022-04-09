import Prop from "prop-types";
import styles from "./index.module.css";

interface IProps {
  title?: string;
  bannerImage?: string;
  subTitle?: string;
}

const SectionBanner: React.FC<IProps> = ({ title, bannerImage, subTitle }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: bannerImage,
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 350,
          position: "relative",
        }}
      >
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapper}>
            <h1>{title}</h1>
            <h4>{subTitle}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

SectionBanner.defaultProps = {
  title: "Services",
  bannerImage: `url(${require("../../assets/svg/placeholder1.webp")})`,
  subTitle:
    "Nexportrade focuses on developing strategies and avenues that boost trade relations between Nigeria and the rest of Africa.",
};

SectionBanner.propTypes = {
  title: Prop.string,
  subTitle: Prop.string,
  bannerImage: Prop.any,
};

export default SectionBanner;
