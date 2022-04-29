import SectionBanner from "../../components/SectionBanner/SectionBanner";
import { PublicPaths } from "../../routes";
import ItemCard from "./components/ItemCard/ItemCard";
import styles from "./index.module.css";

const ServicesPage = () => {
  return (
    <div>
      <SectionBanner />
      <div className={styles.appWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className={styles.title}>
                Wether you’re new to export <br /> or an established
                multinational,
                <br /> our services make international trade <br /> as easy as
                local trade.
              </h3>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
              <div className={styles.sectionGridWrapper}>
                <ItemCard
                  bannerImage={require("../../assets/svg/shakeHand.webp")}
                  title={<h1>Export Market Development</h1>}
                  linkTo={PublicPaths.COMMISSION_AGENCY}
                  subTitle="Partner with Nexportrade on your journey to discovering markets beyond Nigerian borders."
                />
                <ItemCard
                  bannerImage={require("../../assets/svg/crane.webp")}
                  title={<h1>Import &amp; Export Processing Support</h1>}
                  linkTo={PublicPaths.IMPORT_EXPORT}
                  subTitle="Nexportrade guarantees lower cost, faster transit times for West-African import and export processing."
                />
                <ItemCard
                  bannerImage={require("../../assets/svg/warehouse.webp")}
                  title={<h1>Warehousing Solutions</h1>}
                  linkTo={PublicPaths.WAREHOUSING}
                  subTitle="Increase inventory efficiency and help you respond to changing customer demands from overseas faster."
                />
                <ItemCard
                  bannerImage={require("../../assets/svg/market.webp")}
                  title={<h1>Manufacturer Representation</h1>}
                  linkTo={PublicPaths.MANUFACTURER_REPRESENTATION}
                  subTitle="Speak directly  with customers at trade shows, conduct special product events and close sales across the continent."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
