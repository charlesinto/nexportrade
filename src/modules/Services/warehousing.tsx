import { ServicesSubMenu } from ".";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import styles from "./index.module.css";

const Warehousing = () => {
  return (
    <div>
      <SectionBanner
        title="Warehousing Solutions"
        bannerImage={`url(${require("../../assets/svg/warehouse2.webp")})`}
        subTitle="Improve verticals with our warehousing solutions."
      />
      <div className={styles.appWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row">
            <div className="col-md-12">
              <h3
                style={{ maxWidth: 1024, margin: "0 auto", width: "80%" }}
                className={styles.title}
              >
                Sometimes your products need a place to rest while in transit.
                We can keep them in safe and proper storage facilities while you
                focus on more important business.
              </h3>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-8">
              <article>
                Nexportrade’s warehousing solutions was created to provide
                assitance to exporters with temporary storage needs. While
                enroute for a delivery or during trade shows and events, the
                issue of finding a safe and proper place to keep goods often
                arises and proves to be a deterrent to manufacturers and
                businesses involved in exportation across West Africa and to
                solve this issue, Nexportrade and our partners have established
                storage solutions in key strategic locations to provide safe
                temporary holds for goods and allow business to focus on their
                dealings.
                <br />
                <br /> Our storage solution in Togo - the export hub of West
                Africa - also serves as a showroom to display products to
                would-be buyers to place orders.
                <br />
                <br /> Providing proof of product availability For customers and
                businesses arranging an export deal - especially in large
                quantities - our storage solution can be used as a means to
                safely demonstrate the availabilty of goods when required by the
                customer before a payment can be made.
                <br />
                <br />
                Keeping stock during events and trade shows An exporter wishing
                to attend a trade show or hold a special product event can use
                make use of our storage facilities to have stock ready for sale
                should the need arise.
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

export default Warehousing;
