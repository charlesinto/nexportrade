import Button from "../../components/Button/Button";
import styles from "./index.module.css";
import arrowForward from "../../assets/svg/arrowForward.svg";
import TextButton from "../../components/TextButton/TextButton";
import { Outlet } from "react-router-dom";

const ServiceRootPage = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
      <div className={styles.contentWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.section1}>
                <h1 className={`${styles.title} mb-2`}>
                  A wider market reach from your <br /> homebase in Nigeria
                </h1>
                <article
                  style={{ maxWidth: 400, margin: "0 auto" }}
                  className={styles.article}
                >
                  Our virtual showroom is the first step for Nigerian businesses
                  - from SMEs to large industry giants - to reach unexplored
                  African markets.
                </article>
                <div className="d-flex my-4">
                  <Button
                    text={
                      <span className="d-flex align-items-center">
                        <span style={{ textTransform: "uppercase" }}>
                          LEARN MORE
                        </span>
                        <img alt="arrow" className="px-2" src={arrowForward} />
                      </span>
                    }
                    backgroundColor="#fff"
                    textColor={"#3EB259"}
                  />
                </div>
              </div>
            </div>
          </div>

          <section className={styles.section5}>
            <div className={styles.welcomeText5}>
              <span className={styles.heading}>Our Vision</span>
              <div className="mt-4">
                <h1>To be the foremost </h1>
                <h1>tradehouse in Nigeria.</h1>
              </div>
            </div>
            <div>
              <article>
                We aim to be the foremost trade-house that will serve as a
                platform to curb the menaces of informal export trade and boost
                intra-African trade.
              </article>
              <div className="mt-3">
                <TextButton
                  text={
                    <span className="d-flex align-items-center">
                      <span style={{ textTransform: "uppercase" }}>
                        About Us
                      </span>
                      <img alt="arrow" className="px-2" src={arrowForward} />
                    </span>
                  }
                  backgroundColor="#fff"
                  textColor={"#3EB259"}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceRootPage;
