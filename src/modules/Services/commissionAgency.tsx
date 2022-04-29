import { ServicesSubMenu } from ".";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import styles from "./index.module.css";

const CommissionAgency = () => {
  return (
    <div>
      <SectionBanner
        title="Export Market Development"
        bannerImage={`url(${require("../../assets/svg/shakeHand.webp")})`}
        subTitle="An overseas sales team without the staffing hassles."
      />
      <div className={styles.appWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className={styles.title}>
                Our export market development services find the right fit for
                your products beyond Nigerian borders
              </h3>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-8">
              <article>
                Our export market development service was created to provide
                dedicated experts that are equipped to travel abroad, conduct
                market research, and provide useful advice on how a business can
                be optimized for West African markets. Nexportrade works with
                businesses of all sizes to develop international markets through
                a variety of programmes, including;
                <ul
                  style={{ listStyle: "disc", paddingLeft: "32px" }}
                  className="my-4"
                >
                  <li style={{ color: "#000", fontSize: "inherit" }}>
                    Export education scheme
                  </li>
                  <li style={{ color: "#000", fontSize: "inherit" }}>
                    Technical assistance
                  </li>
                  <li style={{ color: "#000", fontSize: "inherit" }}>
                    {" "}
                    Market entry programs
                  </li>
                  <li style={{ color: "#000", fontSize: "inherit" }}>
                    {" "}
                    Market promotion
                  </li>
                </ul>
                Our country marketing representatives work with businesses to
                coordinate market research and promotion efforts at the start of
                plans to enter a new market. Our export education scheme
                provides technical support and resources to learn the steps of
                exporting into a new market via the export knowledge center.
                After researching the market, an efficient export plan is
                provided to advise a business on the best strategies to reach
                potential buyers, negotiate and close deals. At the start of
                exporting, Nexportrade will provide export administration and
                logistics solutions to ensure that the market entry process is
                as smooth as possible and once a business is settled in to a new
                market we provide market promotion services to strenghten market
                awareness and presence.
              </article>
            </div>
            <div className="col-md-4">
              <ServicesSubMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionAgency;
