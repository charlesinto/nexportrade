import React from "react";
import styles from "../index.module.css";
import linkedInOrange from "../../../assets/svg/linkedInOrange.svg";
import twitterOrange from "../../../assets/svg/twitterOrange.svg";
import worldOrange from "../../../assets/svg/worldOrange.svg";

interface Props {
  fullName: string;
  jobTitle?: string;
  description?: string;
  imageUrl?: string;
  linkedLin?: string;
  twitterLink?: string;
  instagramLink?: string;
}

const TeamItemCard: React.FC<Props> = ({
  imageUrl,
  fullName,
  jobTitle,
  description,
  linkedLin,
  twitterLink,
  instagramLink,
}) => {
  return (
    <div className={styles.itemCardWrapper}>
      <img className={styles.itemImage} src={imageUrl} alt="person" />
      <div>
        <h3>{fullName}</h3>
        <span>{jobTitle}</span>
      </div>
      <div className="mt-2">
        <article>{description}</article>
      </div>
      <div className={styles.socialLinks}>
        <a target="_blank" href={linkedLin} rel="noreferrer">
          <img src={linkedInOrange} alt="linkedln" />
        </a>
        <a target="_blank" href={twitterLink} rel="noreferrer">
          <img src={twitterOrange} alt="twitter" />
        </a>
        <a target="_blank" href={instagramLink} rel="noreferrer">
          <img src={worldOrange} alt="world" />
        </a>
      </div>
    </div>
  );
};

TeamItemCard.defaultProps = {
  fullName: "John Does",
  jobTitle: "CEO",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
  imageUrl: `${require("../../../assets/svg/placeholder5.webp")}`,
};

export default TeamItemCard;
