import styles from "./index.module.css";
import logoWhite from "../../../../../assets/svg/logoWhite.svg";
import facebookWhite from "../../../../../assets/svg/facebookWhite.svg";
import instagramWhite from "../../../../../assets/svg/instagramWhite.svg";
import twitterWhite from "../../../../../assets/svg/twitterWhite.svg";
import linkedlnWhite from "../../../../../assets/svg/linkedlnWhite.svg";
import redPhone from "../../../../../assets/svg/redPhone.svg";
import redLocator from "../../../../../assets/svg/redLocator.svg";
import redSend from "../../../../../assets/svg/redSend.svg";
const Footer = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.section1}>
          <img src={redPhone} alt="phone" />
          <article>+234 (0) 813 000 8967</article>
        </div>
        <div className={styles.section2}>
          <img src={redLocator} alt="map" />
          <article>4th Floor, MAN House, 77 </article>
          <article>Awolowo Way, Ikeja, Lagos.</article>
        </div>
        <div className={styles.section3}>
          <img src={redSend} alt="mail" />
          <article>hello@nexportrade.com</article>
        </div>
      </nav>
      <footer className={`${styles.footer}`}>
        <div className="container">
          <div className={` ${styles.wrapper}`}>
            <section className={styles.wrapper1}>
              <article>
                Join our newsletter to stay up to date on features and releases.
              </article>

              <div className="d-flex">
                <input placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
              <article className="pt-2">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </article>
              <p>
                <img
                  src={logoWhite}
                  alt="Nexportrade"
                  className={styles.footerLogo}
                />
              </p>
            </section>
            <section></section>
            <section>
              <h1 className={styles.title}>Navigation</h1>
              <ul>
                <li>About Us</li>
                <li>Service</li>
                <li>Meet The Team</li>
                <li>Leadership History</li>
                <li>Contact Us</li>
              </ul>
            </section>
            <section>
              <h1 className={styles.title}>Resources</h1>
              <ul>
                <li>Learn To Export</li>
                <li>Buying From Nigeria</li>
                <li>eCommerce Portal FAQs</li>
                <li>Useful Links</li>
                <li>Export Credit Lines</li>
                <li>Contact Us</li>
              </ul>
            </section>
            <section>
              <h1 className={styles.title}>Follow Us</h1>
              <ul>
                <li>
                  <img src={facebookWhite} alt="facebook" /> Facebook
                </li>
                <li>
                  <img src={instagramWhite} alt="Instagram" /> Instagram
                </li>
                <li>
                  <img src={twitterWhite} alt="Twitter" />
                  Twitter
                </li>
                <li>
                  <img src={linkedlnWhite} alt="Linkedln" /> LinkedIn
                </li>
              </ul>
            </section>
          </div>
          <hr />

          <section className={styles.footerThumbNail}>
            <h1>2022 Nexportrade. All rights reserved.</h1>
            <div className={styles.footerThumbnailRight}>
              <article>Privacy Policy</article>
              <article>Terms Of Service</article>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;