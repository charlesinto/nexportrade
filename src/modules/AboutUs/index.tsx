import { Outlet } from "react-router-dom";
import styles from "./index.module.css";

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default AboutUs;
