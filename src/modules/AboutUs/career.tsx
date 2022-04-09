import Button from "../../components/Button/Button";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import styles from "./index.module.css";
import { PublicPaths } from "../../routes";
import placeholder7 from "../../assets/svg/placeholder7.webp";

const Career = () => {
  return (
    <div>
      <SectionBanner
        title="Job Openings"
        bannerImage={`url(${require("../../assets/svg/placeholder8.webp")})`}
        subTitle="Nexportrade is a company that offers both professionals and graduates opportunities to gain international experience. Realise your full potential while you help us help grow Nigeria’s economy."
      />
      <div className={styles.appWrapper}>
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

export default Career;
