import Button from "../../components/Button/Button";
import styles from "./index.module.css";
import { PublicPaths } from "../../routes";
import placeholder7 from "../../assets/svg/placeholder7.webp";
import PastLeaderRowItem from "./components/PastLeaderItem";

const Leaders = () => {
  return (
    <div>
      <div className={styles.appWrapper} style={{ paddingTop: 80 }}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row my-4">
            <div className="col-md-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div className="mb-3">
                  <h3
                    style={{
                      color: "#3EB259",
                      fontWeight: "300",
                      fontSize: "3rem",
                      lineHeight: "3.5rem",
                      fontFamily: "'Open sans',sans seriff",
                    }}
                  >
                    Ede Dafinone
                  </h3>
                  <article>
                    Dafinone currently serves as the Chairman of Manufacturers
                    Association of Nigeria Export Promotion Group (MANEG) as
                    well as a non-executive director of NEXIM.
                  </article>
                </div>
                <div
                  style={{
                    display: "grid",
                    columnGap: "20px",
                    gridTemplateColumns: "auto auto",
                    justifyContent: "flex-start",
                  }}
                >
                  <Button text={"BIOGRAPHY"} />
                  <Button text={"ACTIVITIES"} />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <img
                src={placeholder7}
                alt="people"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className={`row ${styles.section}`}>
            <div className="col-md-6">
              <span className={styles.heading}>LEADERSHIP HISTORY</span>
              <h1
                style={{
                  color: "#3EB259",
                  fontWeight: "400",
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                  fontFamily: "'Open sans',sans seriff",
                }}
              >
                Past Leaders
              </h1>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </article>
            </div>
            <div className="col-md-6">
              <PastLeaderRowItem fullName="John Cane" />
              <PastLeaderRowItem fullName="John Cane" />
              <PastLeaderRowItem fullName="John Cane" />
              <PastLeaderRowItem fullName="John Cane" />
              <PastLeaderRowItem fullName="John Cane" />
              <PastLeaderRowItem fullName="John Cane" />
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div className="mb-3">
                  <h3
                    style={{
                      color: "#3EB259",
                      fontWeight: "400",
                      fontSize: "2rem",
                      lineHeight: "2.5rem",
                      fontFamily: "'Open sans',sans seriff",
                    }}
                  >
                    We believe in the Nigerian <br /> economy.
                  </h3>
                  <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </article>
                </div>
                <div className=" d-flex">
                  <Button
                    linkTo={`/${PublicPaths.TEAMS}`}
                    text={"LEADERSHIP HISTORY"}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <img
                src={placeholder7}
                alt="people"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
