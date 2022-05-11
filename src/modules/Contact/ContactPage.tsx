import Button from "../../components/Button/Button";
import styles from "./index.module.css";
import redLocator from "../../assets/svg/redLocator.svg";
import redPhone from "../../assets/svg/redPhone.svg";
import redSend from "../../assets/svg/redSend.svg";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={styles.contactWrapper}>
            <div className={styles.section1b}>
              <div className="row mb-3">
                <div className="col-md-12">
                  <span className={styles.heading}>LET’S TALK</span>
                  <h1>Contact Us</h1>
                  <article>
                    Get in touch with us for export support, information and
                    help with getting your products around West-Africa.
                  </article>
                </div>
              </div>
              <div className="py-2"></div>
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li>
                      <img src={redSend} alt="mail" />
                      <span>hello@nexportrade.com</span>
                    </li>
                    <li>
                      <img src={redPhone} alt="phone" />
                      <span>+234819019019</span>
                    </li>
                    <li>
                      <img src={redLocator} alt="phone" />
                      <span>
                        4th Floor, MAN House,
                        <br /> 77 Awolowo Way,
                        <br /> Ikeja, Lagos.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.section2}>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Phone number</label>
                      <input
                        type="tel"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">
                        Choose topic
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Select one</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <article>Which best describes you?</article>
                    <div className="row my-3">
                      <div className="col">
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                          >
                            Importer
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                          >
                            Business Owner
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                          >
                            Manufacturer
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                          >
                            Exporter
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                          >
                            SME
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Type your message..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        I accept the terms
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Button text="SUBMIT" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
