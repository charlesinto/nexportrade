import listPoint from "../../../assets/svg/listPoint.svg";
import bulletPoint from "../../../assets/svg/bulletPoint.svg";
import styles from "../index.module.css";

interface Props {
  title: string;
  description: string;
  isLast?: boolean;
}

const KeyFeatureListItem: React.FC<Props> = ({
  title,
  description,
  isLast,
}) => {
  return (
    <div className={styles.listPointWrapper}>
      <div>
        <img src={isLast ? bulletPoint : listPoint} alt="point-list" />
      </div>
      <div>
        <h3>{title}</h3>
        <article>{description}</article>
      </div>
    </div>
  );
};

export default KeyFeatureListItem;
