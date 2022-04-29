import Button from "../../components/Button/Button";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import styles from "./index.module.css";
import arrowForward from "../../assets/svg/arrowForward.svg";
import { PublicPaths } from "../../routes";
import ShareHolder from "./components/shareholderItem";
import { AboutSubMenu } from ".";

const ShareHolders = () => {
  return (
    <div>
      <SectionBanner
        title="Nexportrade Shareholders"
        bannerImage={`url(${require("../../assets/svg/placeholder4.webp")})`}
        subTitle="A group of private and government organisations working  together for the greater good."
      />
      <div className={styles.appWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className={styles.title}>
                We are a Public-Private Partnership, incorporated <br /> as a
                Company limited by shares.
              </h3>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li className="mb-4">
                      <span
                        className="my-2"
                        style={{ color: "#3EB259", fontSize: 22 }}
                      >
                        Ownership
                      </span>
                      <article style={{ color: "#000" }}>
                        NEXPORTRADE is a Public-Private Partnership that
                        operates as a Limited Liability entity, with a board
                        shareholding structure. Ownership comprises a mix of
                        shareholders from Banks, Manufacturers, Trade
                        consultants, Trade Associations, and public
                        institutions.
                      </article>
                    </li>
                    <li className="my-4">
                      <span
                        className="my-2"
                        style={{ color: "#3EB259", fontSize: 22 }}
                      >
                        Legal Form
                      </span>
                      <article style={{ color: "#000" }}>
                        NEXPORTRADE Houses Ltd is a Public-Private Partnership
                        incorporated under the Companies and Allied Matters
                        Decree 1990 as a Company limited by shares with a
                        Certificate of Incorporation RC 677383 dated 27th
                        December 2006.
                        <br />
                        <br />
                        <ul style={{ paddingLeft: 32, listStyle: "disc" }}>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Export warehousing with showroom facilities.
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Undertake market research for export trade
                            facilitation.
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Undertake product deliveries to West & Central
                            Africa.
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Developing Export markets on behalf of
                            manufacturers.
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Representation in International Trade Fairs, Solo
                            Exhibitions, etc.
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Facilitation of Export documentation.
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Registration of pre-packaged food products.
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Regularization of product registration.
                          </li>
                        </ul>
                      </article>
                    </li>
                    <li className="my-4">
                      <span
                        className="my-2"
                        style={{ color: "#3EB259", fontSize: 22 }}
                      >
                        Membership
                      </span>
                      <article>
                        <ul style={{ paddingLeft: 32, listStyle: "disc" }}>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Manufacturers Association of Nigeria Export
                            Promotion Group (MANEG)
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Nigerian Export Promotion Council (NEPC)
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Nigerian Association of Chambers of Commerce, and
                            Industries, Mines & Agriculture (NACCIMA)
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            Nigerian Association of Small Scale Industrialists
                            (NASI)
                          </li>
                          <li style={{ color: "#3EB259", fontSize: 14 }}>
                            PZ Cussons Nigeria Plc
                          </li>
                        </ul>
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-3"></div>
              <div className="row">
                <div className="col-md-12">
                  <div className={styles.itemGridServices}>
                    <ShareHolder />
                    <ShareHolder />
                    <ShareHolder />
                    <ShareHolder />
                    <ShareHolder />
                    <ShareHolder />
                  </div>
                </div>
              </div>
              <div className="py-3"></div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-2 d-flex justify-content-center">
                    <Button
                      linkTo={`/${PublicPaths.ABOUT}/${PublicPaths.COMPANY_BIO}`}
                      text={
                        <span className="d-flex align-items-center">
                          <span style={{ textTransform: "uppercase" }}>
                            company bio
                          </span>
                          <img
                            alt="arrow"
                            className="px-2"
                            src={arrowForward}
                          />
                        </span>
                      }
                      backgroundColor="#fff"
                      textColor={"#3EB259"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <AboutSubMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareHolders;
