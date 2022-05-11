import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../../../assets/svg/logo.svg";
import { useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { PublicPaths } from "../../../../../routes";
import styles from "./index.module.css";

const NavBar = () => {
  const [isOpen, setDrawerOpen] = useState(false);

  const isPageWide = useMediaQuery("(min-width: 769px)");
  const location = useLocation();
  useEffect(() => {
    setDrawerOpen(false);
  }, [isPageWide]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);
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
        <span className={styles.menu} onClick={() => setDrawerOpen(true)}>
          <i className="ion ion-ios-menu"></i>
        </span>
        <div
          style={{
            width: isOpen ? "60%" : "0px",
            visibility: isOpen ? "visible" : "hidden",
          }}
          className={styles.drawerMenu}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span
                  className={styles.closeIcon}
                  onClick={() => setDrawerOpen(false)}
                >
                  <i className="ion ion-ios-close"></i>
                </span>
              </div>
            </div>
            <div className={styles.menuContent}>
              <ul>
                <CustomLink to={PublicPaths.HOME} children={"Home"} />
                <CustomLink to={PublicPaths.ABOUT} children={"About Us"} />
                <CustomLink to={PublicPaths.SERVICES} children={"Services"} />
                <CustomLink to={PublicPaths.CONTACT} children={"Contact Us"} />
              </ul>
            </div>
          </div>
        </div>
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
