import Button from "../../components/Button/Button";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import styles from "./index.module.css";
import arrowForward from "../../assets/svg/arrowForward.svg";
import KeyFeatureListItem from "./components/KeyFeatureListItem";
import placeholder3 from "../../assets/svg/placeholder3.webp";
import { PublicPaths } from "../../routes";

const AboutUsPage = () => {
  return (
    <div>
      <SectionBanner
        title="About Us"
        bannerImage={`url(${require("../../assets/svg/placeholder2.webp")})`}
        subTitle="We are an export trade house mandated by the Nigerian Export Promotion Council to increase export trade volumes in Nigeria."
      />
      <div className={styles.appWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className={styles.heading}>Our Vision</h4>
              <article
                style={{ maxWidth: 400 }}
                className={`my-4 ${styles.greenArticleHeading}`}
              >
                To be the foremost trade house that will serve as a platform to
                curb the menace of informal export trade and boost intra-
                African trade.
              </article>
              <div className="mt-3 d-flex">
                <Button linkTo={PublicPaths.COMPANY_BIO} text={"COMPANY BIO"} />

                <Button
                  linkTo={PublicPaths.SHARE_HOLDERS}
                  text={
                    <span className="d-flex align-items-center">
                      <span style={{ textTransform: "uppercase" }}>
                        NEXPORTRADE SHAREHOLDERS
                      </span>
                      <img alt="arrow" className="px-2" src={arrowForward} />
                    </span>
                  }
                  backgroundColor="#fff"
                  textColor={"#3EB259"}
                />
              </div>
            </div>
            <div className="col-md-6">
              <KeyFeatureListItem
                title="Build a solid foundation in key locations across Africa."
                description="Nexportrade operates around ECOWAS states to boost trade relations between West African nations. Our vision is to create a seamless trade relationship among these states in order to grow our economies together."
              />
              <KeyFeatureListItem
                title="Set up a reliable freight forwarding network."
                description="To further support Nigerian exporters, we envision a West African freight forwarding network with reliable and affordable solutions for cargo delivery. To this effort, we have already proposed the Sealink freight forwarding service which we expect to be up and running in the coming months."
              />
              <KeyFeatureListItem
                title="Negotiate trade subsidies for exporters."
                description="Collaborating with our partner, the Manufacturers Association of Nigeria’s Export Promotion Group, we would work with the Nigerian government to create trade subsidies targeted at Nigerian exporters to encourage international trade among West African states."
              />
              <KeyFeatureListItem
                isLast
                title="Spread the word about trading in Africa."
                description="We know that promoting goods in another country can be a tough task for any business, and to aid businesses grow in around our target areas of operation, we carry out promotional activities like trade fairs and import/export sensitiastion programs."
              />
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-12 py-5"
              style={{ margin: "0 auto", width: "60%" }}
            >
              <div>
                <article className={`${styles.article} text-center`}>
                  Nexportrade Houses Limited (NHL) was established in 2006 to
                  serve as a secure platform for increased and better-organised
                  trade relations among Business Groups operating in ECOWAS
                  member States and other African Nations. Nexportrade expects
                  to drive the process of implementing an economic network that
                  will facilitate, promote, and sustain a business-friendly
                  environment amongst and between economic operators.
                </article>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <Button
                  text={
                    <span className="d-flex align-items-center">
                      <span style={{ textTransform: "uppercase" }}>
                        MORE ABOUT NEXPORTRADE
                      </span>
                      <img alt="arrow" className="px-2" src={arrowForward} />
                    </span>
                  }
                  backgroundColor="#fff"
                  textColor={"#3EB259"}
                  linkTo={PublicPaths.COMPANY_BIO}
                />
              </div>
            </div>
          </div>

          <div className="row">
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
                    Our people are very enthusiastic about the Nigerian economy
                    potential. Everyone at Nexportrade is well versed in a wide
                    array of businesses involved in international trade and
                    diplomatic relations.
                  </article>
                </div>
                <div className=" d-flex">
                  <Button
                    linkTo={`${PublicPaths.TEAMS}`}
                    text={"MEET THE TEAM"}
                  />

                  <Button
                    linkTo={PublicPaths.LEADERSHIP}
                    text={
                      <span className="d-flex align-items-center">
                        <span style={{ textTransform: "uppercase" }}>
                          leadership history
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

            <div className="col-md-6">
              <img
                src={placeholder3}
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

export default AboutUsPage;
