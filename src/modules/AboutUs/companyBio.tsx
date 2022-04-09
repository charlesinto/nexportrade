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
                We were established in 2006 to increase
                <br /> and organise trade relations for Nigeria.
              </h3>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    volutpat dolor diam vivamus sed ut. Aliquam tellus, nec amet
                    bibendum vulputate. Dignissim dui, pellentesque nibh
                    malesuada rhoncus a sagittis. Et imperdiet metus donec a sed
                    et. Sit nunc ante vitae pretium. Tortor elit mi, porta
                    mauris. Facilisi aliquet amet, tempor lacus ullamcorper
                    ultricies at rhoncus. Commodo aliquet dolor sit vel tempor
                    accumsan adipiscing tempus. Tincidunt tempor urna elementum
                    eget. Nibh vel, id enim amet tristique. Quis pulvinar eget
                    pellentesque at lobortis ante. Tellus sed sit in turpis
                    mattis amet. Libero viverra est condimentum egestas. Ut
                    nulla nulla dignissim parturient non enim aliquam ut.
                    Elementum nascetur enim nec, vulputate at arcu pretium.
                    Dignissim consectetur purus vitae lectus in cursus fames
                    fringilla. Tincidunt pulvinar congue in integer sit molestie
                    tempus. Senectus condimentum vel convallis pretium mauris
                    turpis purus eget. Facilisi donec magnis id nulla ornare. Et
                    platea aliquet tincidunt sodales at. Sagittis, ut volutpat
                    tempus quisque pulvinar feugiat cursus ut adipiscing. At
                    nulla cursus sed dapibus ullamcorper praesent pellentesque.
                    Elementum vel consectetur accumsan imperdiet a. Orci semper
                    laoreet bibendum vitae. Porttitor massa porta ut purus
                    facilisi tincidunt quam amet. Ullamcorper ut tempus, nisl,
                    morbi lectus a. Non quisque libero gravida sit vel dui.
                    Donec gravida id bibendum euismod pellentesque volutpat
                    viverra at quisque. Tristique augue ac at mus tempor. Quam
                    ultrices ultricies sed suspendisse blandit nisl laoreet
                    massa pretium. Urna tincidunt ac ut amet. Quam eget nunc,
                    fringilla orci consectetur amet ipsum amet fringilla. Arcu
                    condimentum volutpat ut ridiculus pharetra massa. Vulputate
                    ultricies venenatis enim ac a. Vel dictum viverra mauris
                    vitae in aenean quis. Est posuere sed aliquet gravida erat
                    euismod curabitur tincidunt ipsum. Posuere sit facilisi
                    vitae ac nec mi sodales eget elit. Fermentum ac sit dolor
                    fermentum. Facilisis urna, ornare mattis turpis venenatis,
                    fermentum morbi id. Luctus erat posuere sed pharetra
                    elementum tristique. Sem volutpat tortor, in dictum vitae.
                    Sit neque vitae, pulvinar maecenas diam risus, sed
                    fringilla. Mattis quam diam sagittis vestibulum tortor, mi
                    duis. Velit praesent sagittis massa, sed mattis porta.
                    Pulvinar aenean sed quis amet pulvinar vitae amet. Non amet
                    vulputate id lectus mi mi cras quam risus. Vitae commodo
                    morbi consectetur purus. Volutpat nullam lectus urna fames
                    vivamus varius. Leo imperdiet arcu aliquam commodo. Id
                    dictumst fringilla tempus, morbi id mauris massa. Cras
                    scelerisque eu consectetur viverra faucibus purus pharetra
                    turpis sed. In natoque dictumst quam sit lorem ultrices. Sit
                    mattis est, amet viverra duis justo. Elementum nunc leo
                    sollicitudin scelerisque interdum elit, varius ipsum. Tempor
                    interdum velit tortor quam pharetra. Turpis mus arcu, mi
                    nibh tincidunt. Nulla eu praesent netus orci eget. At nec
                    commodo potenti non nisi turpis scelerisque id. Morbi
                    aliquam dignissim cras libero, tellus nec massa. Ipsum purus
                    tincidunt quam aliquam massa sed lacus, aliquet non. Ac vel
                    luctus in sapien, felis, neque, odio lectus. Tellus gravida
                    ultrices sit sit. Eget tempor pulvinar eget at tristique
                    turpis dictum non. Sit at risus amet id aliquam quis
                    vestibulum. Montes, luctus quis etiam odio. Fermentum
                    egestas volutpat mauris, feugiat. Mattis sit diam sed et.
                    Eget cursus maecenas tempus, dui. Semper massa elementum
                    ultrices velit sit nulla. Pretium scelerisque urna interdum
                    ac mi scelerisque elit. Convallis sapien massa purus magna
                    tellus cras mi aliquam ornare. Enim lobortis pretium, tortor
                    etiam. Odio amet, ac tempus magna non nulla eget integer.
                    Massa vel feugiat at ultrices sit nunc dignissim adipiscing
                    amet. Porttitor augue dui risus rhoncus, placerat tincidunt
                    ut. Leo, interdum et, penatibus integer quam nunc urna.
                    Vestibulum, dui tincidunt fames id. Enim, mattis turpis id
                    tempor elementum. Quis mauris leo, dictum quisque est.
                    Sagittis pellentesque in sodales velit non orci tempus, sit
                    mauris. Pharetra gravida at at imperdiet pellentesque velit.
                  </article>
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
