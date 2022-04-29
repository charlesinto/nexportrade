import { ServicesSubMenu } from ".";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import styles from "./index.module.css";

const ImportExport = () => {
  return (
    <div>
      <SectionBanner
        title="Import & Export Processing Support"
        bannerImage={`url(${require("../../assets/svg/ship.webp")})`}
        subTitle="Professional cross-border trade processing"
      />
      <div className={styles.appWrapper}>
        <div style={{ display: "grid", rowGap: 80 }} className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className={styles.title}>
                We have an affordable and reliable delivery network <br />{" "}
                across West-Africa to cater to all sizes of exporters, from{" "}
                <br /> Startups and SMES to large facilities
              </h3>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-8">
              <article>
                Our import and export processing support services provides
                businesses with assistance on reulatory compliance of the
                various environmental, political, economic and social
                infrastructure necessary proper distribution of consumer goods
                across West Africa.
              </article>
              <br />
              <br />
              <article>
                We work with businesses of all sizes to reduce entry barriers
                when looking to explore African markets with complex legal,
                logistics, shipping, distribution and administrative challenges.
                A perfect solution for manufacturers and exporters to expand
                their business, create additional revenue streams and promote
                cross-cultural relationships.
              </article>
              <br />
              <br />
              <article>
                Our country representatives can facilitate
                <ul
                  style={{ listStyle: "disc", paddingLeft: "32px" }}
                  className="my-4"
                >
                  <li style={{ color: "#000", fontSize: "inherit" }}>
                    {" "}
                    Goods transportation
                  </li>
                  <li style={{ color: "#000", fontSize: "inherit" }}>
                    Source materials for import
                  </li>
                  <li style={{ color: "#000", fontSize: "inherit" }}>
                    Distribution at destination countries
                  </li>
                  <li style={{ color: "#000", fontSize: "inherit" }}>
                    Sales channel management Marketing activities
                  </li>
                </ul>
              </article>
              <br />
              <br />
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

export default ImportExport;
