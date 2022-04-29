import { ServicesSubMenu } from ".";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import styles from "./index.module.css";

const ManufacturerRepresentation = () => {
  return (
    <div>
      <SectionBanner
        title="Manufacturer Representation"
        bannerImage={`url(${require("../../assets/svg/market2.webp")})`}
        subTitle="Create a presence at trade fairs without attending."
      />
      <div className={styles.appWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row">
            <div className="col-md-12">
              <h3
                style={{ maxWidth: 1024, margin: "0 auto", width: "80%" }}
                className={styles.title}
              >
                Our skilled professionals are ready to demonstrate your
                product’s value in locations beyond Nigeria’s borders.
              </h3>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-8">
              <article>
                Nexportrade’s manufacturer representation services is best
                suited for manufacutrers with the intent to expand into new
                markets across Africa but with limited capacity to travel around
                the continent on short notices. Our team can represent a
                business at trade shows or hold events and speak directly to
                potential customers on behalf of the manufacturer to drive
                growth and create awareness.
                <br />
                <br /> The process begins by first working closesly with the
                manufacturer to understand objectives, business strengths, and
                competitive pressures.
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

export default ManufacturerRepresentation;
