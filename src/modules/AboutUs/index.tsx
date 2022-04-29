import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import { PublicPaths } from "../../routes";
import styles from "./index.module.css";

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export const AboutSubMenu = () => {
  const [pathName, setPathName] = useState(``);
  const location = useLocation();
  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);
  return (
    <div className={styles.subMenuWrapper}>
      <h1>
        <span className="text-white">BROWSE OTHER SERVICES</span>
      </h1>
      <ul>
        {pathName !== `/${PublicPaths.ABOUT}/${PublicPaths.COMPANY_BIO}` && (
          <li>
            <Link to={`/${PublicPaths.ABOUT}/${PublicPaths.COMPANY_BIO}`}>
              Company Bio
            </Link>
          </li>
        )}
        {pathName !== `/${PublicPaths.ABOUT}/${PublicPaths.SHARE_HOLDERS}` && (
          <li>
            <Link to={`/${PublicPaths.ABOUT}/${PublicPaths.SHARE_HOLDERS}`}>
              Nexportrade ShareHolders
            </Link>
          </li>
        )}
      </ul>

      <div className="d-flex justify-content-center my-4">
        <Button linkTo={`/${PublicPaths.CONTACT}`} text={"CONTACT US"} />
      </div>
    </div>
  );
};

export default AboutUs;
