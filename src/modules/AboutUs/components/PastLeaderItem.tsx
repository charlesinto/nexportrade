import React from "react";
import styles from "../index.module.css";

interface Props {
  fullName: string;
  jobTitle?: string;
  description?: string;
  imageUrl?: string;
  linkedLin?: string;
  twitterLink?: string;
  instagramLink?: string;
}

const PastLeaderRowItem: React.FC<Props> = ({
  imageUrl,
  fullName,
  description,
}) => {
  return (
    <div className={styles.pastLeaderRowItem}>
      <img src={imageUrl} alt="past leader" />
      <div>
        <h3>{fullName}</h3>
        <article>{description}</article>
      </div>
    </div>
  );
};

PastLeaderRowItem.defaultProps = {
  fullName: "John Does",
  jobTitle: "CEO",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
  imageUrl: `${require("../../../assets/svg/placeholder5.webp")}`,
};

export default PastLeaderRowItem;
