import Button from "../../components/Button/Button";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import styles from "./index.module.css";
import arrowForward from "../../assets/svg/arrowForward.svg";
import { PublicPaths } from "../../routes";

const CompanyBio = () => {
  return (
    <div>
      <SectionBanner
        title="Company Bio"
        bannerImage={`url(${require("../../assets/svg/placeholder2.webp")})`}
        subTitle="The result of industry experts and government agencies with the common goal of boosting exports."
      />
      <div className={styles.appWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className={styles.title}>
                We were established in 2006 to increase and organise <br />
                trade relations for Nigeria.
              </h3>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li className="my-4">
                      <span
                        className="my-2"
                        style={{ color: "#3EB259", fontSize: 22 }}
                      >
                        History/Background
                      </span>
                      <article style={{ color: "#000" }}>
                        In the spirit of Public-Private Partnership (PPP), the
                        Nigerian Export Promotion Council (NEPC) in 2006
                        mandated the Manufacturers Association of Nigeria Export
                        Promotion Group (MANEG), to midwife the process of
                        setting up the first Nigerian Trade House company:
                        Nexportrade Houses Ltd.
                      </article>
                    </li>
                    <li className="my-4">
                      <span
                        className="my-2"
                        style={{ color: "#3EB259", fontSize: 22 }}
                      >
                        Activities
                      </span>
                      <article style={{ color: "#000" }}>
                        Activities Nexportrade expects to drive the process of
                        implementing an economic network that will facilitate,
                        promote, and sustain a business-friendly environment
                        amongst and between economic operators.
                        <br />
                        <br />
                        This process is expected to reinforce business and
                        investment relations between African Nations by
                        leveraging bilateral agreements, MoUs, and protocols
                        entered between sister Nations.
                        <br />
                        <br /> It aims to lead to the actualization of
                        cooperation through the integration of businesses and
                        people in the field using protocols designed by
                        policymakers and ratified by political leaders at
                        regional and continental levels.
                        <br />
                        <br />
                        Additionally, the Nexportrade initiative will indirectly
                        address the loss of government revenue arising from the
                        volume of informal trade in sub-Saharan Africa and avail
                        Governments, policymakers and development partners with
                        the opportunity to obtain credible trade statistics
                        needed to capture economic trends for decision-making
                        processes as well as for effective planning for national
                        development and attainment of the MDGs.
                        <br />
                        <br /> We expect similar trade hubs to be established in
                        the ECOWAS member states and elsewhere in Africa. These
                        business hubs will be patterned along the Nigerian model
                        to boost the volume of intra-African trade and ensure a
                        seamless investment climate. Our competencies and areas
                        of expertise include:
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
                        Locations and Facilities:{" "}
                      </span>
                      <article style={{ color: "#000" }}>
                        Nexportrade Houses Limited has an office space and
                        showroom located in Lomé Togo. The office is equipped
                        with shelves to showcase made-in-Nigerian products in
                        the office. Taxes have been filed and registered with
                        the Togo tax authorities. Mr George Eriwona, the Export
                        Development Manager for Nexportrade Houses Limited,
                        manages the company's office and showroom activities. Mr
                        Edem Konou serves as the Business Secretary on a
                        full-time basis to help run the daily operations of the
                        business as well as respond to inquiries from potential
                        customers.
                      </article>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-2 d-flex justify-content-center">
                    <Button
                      linkTo={`/${PublicPaths.ABOUT}/${PublicPaths.SHARE_HOLDERS}`}
                      text={
                        <span className="d-flex align-items-center">
                          <span style={{ textTransform: "uppercase" }}>
                            Nexportrade Shareholders
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
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBio;
