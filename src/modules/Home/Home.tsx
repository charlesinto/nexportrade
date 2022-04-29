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
                <span className={styles.heading}>
                  Export Market Development
                </span>
                <div className="mt-4">
                  <h1>
                    An overseas sales <br /> team without staffing <br />{" "}
                    hassles.{" "}
                  </h1>
                </div>

                <article className="my-4">
                  Partner with Nexportrade on your journey to discovering
                  markets beyond Nigerian borders. Our team is well equipped to
                  conduct market research, promotional activities, and awareness
                  campaigns for you while your base of operations is still in
                  Nigeria, and when you are ready to go on your own, we will
                  make sure you have a soft landing into your new market.
                </article>

                <div className="my-4">
                  <Button linkTo={PublicPaths.SERVICES} text={"LEARN MORE"} />
                  <Button
                    linkTo={PublicPaths.CONTACT}
                    text={
                      <span className="d-flex align-items-center">
                        <span style={{ textTransform: "uppercase" }}>
                          schedule a meeting
                        </span>
                        <img alt="arrow" className="px-2" src={arrorForward} />
                      </span>
                    }
                    backgroundColor="#fff"
                    textColor={"#3EB259"}
                  />
                </div>
                <div className="my-4"></div>
              </div>
            </div>
          </section>
          <section className={styles.section3}>
            <div className={styles.wrapper}>
              <div className={styles.welcomeText3}>
                <span className={styles.heading}>
                  IMPORT &amp; EXPORT FACILITATION
                </span>
                <div className="my-4">
                  <h1>
                    Professional cross- <br />
                    border trade
                    <br /> processing.
                  </h1>
                </div>

                <article className="my-4">
                  Our team is well experienced in export-import around
                  West-Africa. Choosing Nexportrade to process deliveries to and
                  from West-African countries gurantees a lower cost and faster
                  delivery times for all your import-export needs. As an added
                  bonus, we can help you source the right suppliers for and
                  importers for your product’s lifecycle.
                </article>

                <ul className="my-4">
                  <li>
                    <img src={vector} alt="vector" />
                    Affordable cargo delivery with our groupage service.
                  </li>
                  <li>
                    <img src={vector} alt="vector" />
                    Faster land-border export processing.
                  </li>
                  <li>
                    <img src={vector} alt="vector" />
                    Professional export documentation services.
                  </li>
                </ul>
                <div className="my-3">
                  <Button linkTo={PublicPaths.SERVICES} text={"LEARN MORE"} />
                  <Button
                    text={
                      <span className="d-flex align-items-center">
                        <span style={{ textTransform: "uppercase" }}>
                          arrange a delivery
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
                <div className="my-4">
                  <h1>
                    A safe place to store <br /> your goods while in
                    <br /> transit.{" "}
                  </h1>
                </div>

                <article className="my-4">
                  Our Warehousing Solutions are designed to increase inventory
                  efficiency and help you respond to changing customer demands
                  from overseas faster. We offer temporary storage for goods -
                  typically up to a maximum of two days -so businesses worry
                  less about the safety of their goods while transaction details
                  are ironed out. Our storage facilities can also be used to
                  serve other business needs while your goods are in transit.
                </article>

                <div className={`my-5 ${styles.section4Info}`}>
                  <div>
                    <h1>As proof of product availability </h1>

                    <article className="mb-3">
                      When your customers demand proof of availability, we can
                      hold your goods in our storage facilities until they are
                      satisfied and ready to purchase.
                    </article>
                  </div>
                  <div>
                    <h1>As a temporary hold for tradeshows</h1>

                    <article className="mb-3">
                      When you want to send your products to out of the country
                      to tradeshows and product demonstrations, we can provide
                      safe storage for the duration of the event.
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
              <div className="my-4">
                <h1>
                  Attend trade shows
                  <br /> and conduct special
                  <br /> product events
                  <br />
                  remotely.
                </h1>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <article className="my-4">
                As you grow your market and spread your reach across Africa, you
                will need some level of presence in the markets you wish to
                operate. We can provide the help you need to speak directly with
                cutomers at trade shows, conduct special product events and
                close sales across the continent.
              </article>
              <ul className="my-3">
                <li>Special product events and sample showcasing.</li>
                <li>Pop up shops for awareness campaigns and sales. </li>
                <li>Trade show hosting and attendance. </li>
                <li>After sales support services. </li>
                <li>After sales support services. </li>
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
                  <TextButton
                    linkTo={`/${PublicPaths.ABOUT}/${PublicPaths.SHARE_HOLDERS}`}
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
              <h1>
                Coming soon. The Nexportrade <br /> Virtual Showroom
              </h1>
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
              {/* <Button text={"View Portal"} /> */}
              <Button
                text={
                  <span className="d-flex align-items-center">
                    <span style={{ textTransform: "uppercase" }}>
                      Learn More
                    </span>
                    <img alt="arrow" className="px-2" src={arrorForward} />
                  </span>
                }
                linkTo={PublicPaths.SERVICES}
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
