import Button from "../../components/Button/Button";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import styles from "./index.module.css";
import { PublicPaths } from "../../routes";
import placeholder7 from "../../assets/svg/placeholder7.webp";
import TeamItemCard from "./components/TeamItemCard";

const Team = () => {
  return (
    <div>
      <SectionBanner
        title="Our Team"
        bannerImage={`url(${require("../../assets/svg/placeholder6.webp")})`}
        subTitle="A team of enthusiastic Nigerians that love to promote all things Nigeria."
      />
      <div className={styles.appWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row my-4">
            <div className="col-md-12">
              <div className={styles.teamGridWrapper}>
                <TeamItemCard fullName="John Cane" />
                <TeamItemCard fullName="John Cane" />
                <TeamItemCard fullName="John Cane" />
                <TeamItemCard fullName="John Cane" />
                <TeamItemCard fullName="John Cane" />
                <TeamItemCard fullName="John Cane" />
                <TeamItemCard fullName="John Cane" />
                <TeamItemCard fullName="John Cane" />
                <TeamItemCard fullName="John Cane" />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6">
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
                  Work with us
                </h3>
                <article>
                  Realise your full potential while you help us help Nigeria’s
                  economy grow.
                </article>
              </div>
              <div className=" d-flex">
                <Button
                  linkTo={`/${PublicPaths.ABOUT}/${PublicPaths.CAREER}`}
                  text={"OPEN POSITIONS"}
                />
              </div>
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
                    linkTo={`/${PublicPaths.ABOUT}/${PublicPaths.LEADERSHIP}`}
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

export default Team;
