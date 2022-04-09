import { Outlet, useLocation } from "react-router-dom";
import styles from "./index.module.css";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
const AppLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className={styles.appLayout}>
      <div className={styles.navWrapper}>
        <NavBar />
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
