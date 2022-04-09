import placeholder5 from "../../../assets/svg/placeholder5.webp";

interface Props {
  imageUrl?: string;
}

const ShareHolder: React.FC<Props> = ({ imageUrl }) => {
  return (
    <img
      style={{ width: "100%", objectFit: "cover" }}
      src={imageUrl || placeholder5}
      alt="services"
    />
  );
};

export default ShareHolder;
