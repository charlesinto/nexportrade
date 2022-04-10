import styles from "./index.module.css";
import Button from "../../components/Button/Button";
import arrorForward from "../../assets/svg/arrowForward.svg";
import vector from "../../assets/svg/vector.svg";
import maneg from "../../assets/svg/maneg.svg";
import nexim from "../../assets/svg/nexim.svg";
import nepc from "../../assets/svg/nepc.svg";
import TextButton from "../../components/TextButton/TextButton";
import { PublicPaths } from "../../routes";

const Home = () => {
  return (
    <>
      <section className={styles.sectionWelcome}>
        <div className={styles.welcomeText1}>
          <div>
            <h1 className={styles.header}>Transforming </h1>
            <h1 className={styles.header}>West Africa’s </h1>
            <h1 className={styles.header}>Trade Relations</h1>
          </div>

          <article className="mb-3">
            Nexportrade is a secure platform created by the Manufacturers
            Association of Nigeria’s Export Promotion Group to boost trade
            relations in ECOWAS member states and African Nations.
          </article>

          <div className={styles.transparentName}>
            <Button linkTo={PublicPaths.SERVICES} text={"OUR SERVICES"} />
            <Button
              linkTo={PublicPaths.CONTACT}
              text={
                <span className="d-flex align-items-center">
                  <span style={{ textTransform: "uppercase" }}>Contact Us</span>
                  <img alt="arrow" className="px-2" src={arrorForward} />
                </span>
              }
              backgroundColor="#fff"
              textColor={"#3EB259"}
            />
          </div>
        </div>
        <div className={styles.welcomeImage1}></div>
      </section>
      <div className="container">
        <div className={styles.homeSection}>
          <section className={styles.section2}>
            <div className={styles.wrapper}>
              <div className={styles.welcomeImage2}></div>
              <div className={styles.welcomeText2}>
                <span className={styles.heading}>COMMISSION AGENCY</span>
                <div className="mt-4">
                  <h1>An overseas sales </h1>
                  <h1>team without staffing</h1>
                  <h1>hassles.</h1>
                </div>

                <article>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </article>

                <div className={`my-5 ${styles.section2Info}`}>
                  <div>
                    <h1>50% </h1>

                    <article className="mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </article>

                    <Button text={"See More"} />
                  </div>
                  <div>
                    <h1>50% </h1>

                    <article className="mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </article>

                    <TextButton
                      text={
                        <span className="d-flex align-items-center">
                          <span style={{ textTransform: "uppercase" }}>
                            See More
                          </span>
                          <img
                            alt="arrow"
                            className="px-2"
                            src={arrorForward}
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
          </section>
          <section className={styles.section3}>
            <div className={styles.wrapper}>
              <div className={styles.welcomeText3}>
                <span className={styles.heading}>
                  IMPORT &amp; EXPORT FACILITATION
                </span>
                <div className="mt-4">
                  <h1>Guaranteed logisitcs to</h1>
                  <h1> strenghten your</h1>
                  <h1>market visibility.</h1>
                </div>

                <article>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </article>

                <ul>
                  <li>
                    <img src={vector} alt="vector" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    <img src={vector} alt="vector" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    <img src={vector} alt="vector" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    <img src={vector} alt="vector" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    <img src={vector} alt="vector" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
                <div className="my-3">
                  <Button text={"Button"} />
                  <Button
                    text={
                      <span className="d-flex align-items-center">
                        <span style={{ textTransform: "uppercase" }}>
                          Button
                        </span>
                        <img alt="arrow" className="px-2" src={arrorForward} />
                      </span>
                    }
                    backgroundColor="#fff"
                    textColor={"#3EB259"}
                  />
                </div>
              </div>
              <div className={styles.welcomeImage3}></div>
            </div>
          </section>

          <section className={styles.section4}>
            <div className={styles.wrapper}>
              <div className={styles.welcomeImage4}></div>
              <div className={styles.welcomeText4}>
                <span className={styles.heading}>WAREHOUSING SOLUTIONS</span>
                <div className="mt-4">
                  <h1>Improve verticals with </h1>
                  <h1>our warehousing</h1>
                  <h1>solutions.</h1>
                </div>

                <article>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </article>

                <div className={`my-5 ${styles.section4Info}`}>
                  <div>
                    <h1>Subheading One </h1>

                    <article className="mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </article>
                  </div>
                  <div>
                    <h1>Subheading Two </h1>

                    <article className="mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section5}>
            <div className={styles.welcomeText5}>
              <span className={styles.heading}>
                Maunfacturer Representation
              </span>
              <div className="mt-4">
                <h1>Create a presence at</h1>
                <h1>trade fairs and events</h1>
                <h1>without attending.</h1>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </article>
              <ul className="mt-3">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section6}>
            <div className={styles.welcomeText6}>
              <span className={styles.heading}>Our Partners</span>
              <div className="mt-4">
                <h1>You are in good</h1>
                <h1>company.</h1>
                <div className="mt-3">
                  <Button
                    text={
                      <span className="d-flex align-items-center">
                        <span style={{ textTransform: "uppercase" }}>
                          Nexportrade Shareholders
                        </span>
                        <img alt="arrow" className="px-2" src={arrorForward} />
                      </span>
                    }
                    backgroundColor="#fff"
                    textColor={"#3EB259"}
                  />
                </div>
              </div>
            </div>
            <div className={styles.partnerLogo}>
              <img className="logos" src={maneg} alt="maneg" />
              <img className="logos" src={nexim} alt="nexim" />
              <img className="logos" src={nepc} alt="nepc" />
            </div>
          </section>

          <section className={styles.section7}>
            <div className={styles.welcomeText7}>
              <h1>Get started exporting with us today</h1>
            </div>
            <div
              style={{
                width: "50%",
                margin: "10px auto",
              }}
            >
              <article className="text-center">
                Our eCommerce portal bridges the gap between Nigeria, Africa and
                the rest of the world. Buyers can source goods made and sold by
                Nigerian businesses with confidence, and exporters from Nigeria
                have a fresh way to reach other African markets and the rest of
                the world.
              </article>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <Button text={"View Portal"} />
              <Button
                text={
                  <span className="d-flex align-items-center">
                    <span style={{ textTransform: "uppercase" }}>
                      Learn More
                    </span>
                    <img alt="arrow" className="px-2" src={arrorForward} />
                  </span>
                }
                backgroundColor="#fff"
                textColor={"#3EB259"}
              />
            </div>
          </section>

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
                  linkTo={PublicPaths.ABOUT}
                  text={
                    <span className="d-flex align-items-center">
                      <span style={{ textTransform: "uppercase" }}>
                        About Us
                      </span>
                      <img alt="arrow" className="px-2" src={arrorForward} />
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
    </>
  );
};

export default Home;
