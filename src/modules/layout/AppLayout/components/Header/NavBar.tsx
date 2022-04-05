import { Link } from "react-router-dom";
import logo from "../../../../../assets/svg/logo.svg";
import styles from "./index.module.css";

const NavBar = () => {
  return (
    <nav className={` ${styles.nav}`}>
      <section className={`container ${styles.sectionNav}`}>
        <div className={styles.logo}>
          <img src={logo} alt="Nexportrade" />
        </div>
        <ul className={styles.ul}>
          <li className={styles.active}>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contacts</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default NavBar;
