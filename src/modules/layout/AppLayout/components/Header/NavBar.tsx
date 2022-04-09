import { Link, useLocation } from "react-router-dom";
import logo from "../../../../../assets/svg/logo.svg";
import { PublicPaths } from "../../../../../routes";
import styles from "./index.module.css";

const NavBar = () => {
  return (
    <nav className={` ${styles.nav}`}>
      <section className={`container ${styles.sectionNav}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Nexportrade" />
          </Link>
        </div>
        <ul className={styles.ul}>
          <CustomLink to={PublicPaths.HOME} children={"Home"} />
          <CustomLink to={PublicPaths.ABOUT} children={"About Us"} />
          <CustomLink to={PublicPaths.SERVICES} children={"Services"} />
          <CustomLink to={PublicPaths.CONTACT} children={"Contacts"} />
        </ul>
      </section>
    </nav>
  );
};

const CustomLink: React.FC<{
  to: string;
  children: string | JSX.Element;
}> = ({ to, children }) => {
  const location = useLocation();

  return (
    <li
      className={`${
        location.pathname === PublicPaths.HOME && to === PublicPaths.HOME
          ? styles.active
          : location.pathname.startsWith(`/${to}`) && to !== PublicPaths.HOME
          ? styles.active
          : styles.inActive
      }`}
    >
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default NavBar;
