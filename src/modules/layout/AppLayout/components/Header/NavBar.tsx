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
          <li className={styles.active}>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
      </section>
    </nav>
  );
};

export default NavBar;
