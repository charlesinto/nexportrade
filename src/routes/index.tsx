// import { createBrowserHistory } from "history";
import { IRouteItem } from "../common/interface";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../modules/layout/AppLayout/AppLayout";
import Home from "../modules/Home/Home";
import ServicesPage from "../modules/Services/services";
import CommissionAgency from "../modules/Services/commissionAgency";
import ImportExport from "../modules/Services/importExport";
import Warehousing from "../modules/Services/warehousing";
import ManufacturerRepresentation from "../modules/Services/manufacturers";
import ServiceRootPage from "../modules/Services";
import AboutUs from "../modules/AboutUs/index";
import AboutUsPage from "../modules/AboutUs/aboutus";
import CompanyBio from "../modules/AboutUs/companyBio";
import ShareHolders from "../modules/AboutUs/shareholders";
import Team from "../modules/AboutUs/team";
import Career from "../modules/AboutUs/career";
import Leaders from "../modules/AboutUs/leaders";
import Contact from "../modules/Contact";
import ContactPage from "../modules/Contact/ContactPage";

export const PublicPaths = {
  CONTACT: "contact",
  ABOUT: "about-us",
  SERVICES: "services",
  PROFILE: "profile",
  TEAMS: "our-team",
  CAREER: "career",
  LEADERSHIP: "leadership",
  COMMISSION: "commission",
  WARE_HOUSE: "ware-house",
  IMPORT_EXPORT: "import-export",
  MANUFACTURER: "manufacturers",
  COMMISSION_AGENCY: "commission-agency",
  WAREHOUSING: "warehousing",
  MANUFACTURER_REPRESENTATION: "manufacturers",
  COMPANY_BIO: "company",
  SHARE_HOLDERS: "shareholders",
  HOME: "/",
};

export const DashboardPaths = {
  HOME: "/",
};

const publicRoutes: IRouteItem[] = [
  {
    path: PublicPaths.SERVICES,
    component: <ServiceRootPage />,
    exact: true,
    children: [
      {
        path: PublicPaths.COMMISSION_AGENCY,
        component: <CommissionAgency />,
        exact: true,
      },
      {
        component: <ServicesPage />,
        exact: true,
        index: true,
      },
      {
        path: PublicPaths.IMPORT_EXPORT,
        component: <ImportExport />,
        exact: true,
      },
      {
        path: PublicPaths.WAREHOUSING,
        component: <Warehousing />,
        exact: true,
      },
      {
        path: PublicPaths.MANUFACTURER_REPRESENTATION,
        component: <ManufacturerRepresentation />,
        exact: true,
      },
    ],
  },
  {
    path: PublicPaths.ABOUT,
    component: <AboutUs />,
    exact: true,
    children: [
      {
        index: true,
        component: <AboutUsPage />,
        exact: true,
      },
      {
        path: PublicPaths.COMPANY_BIO,
        component: <CompanyBio />,
        exact: true,
      },
      {
        path: PublicPaths.SHARE_HOLDERS,
        component: <ShareHolders />,
        exact: true,
      },
      {
        path: PublicPaths.TEAMS,
        component: <Team />,
        exact: true,
      },
      {
        path: PublicPaths.CAREER,
        component: <Career />,
        exact: true,
      },
      {
        path: PublicPaths.LEADERSHIP,
        component: <Leaders />,
        exact: true,
      },
    ],
  },
  {
    path: PublicPaths.CONTACT,
    component: <Contact />,
    exact: true,
    children: [
      {
        index: true,
        exact: true,
        component: <ContactPage />,
      },
    ],
  },
];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          {publicRoutes.map((item, i) => (
            <Route key={i} path={item.path} element={item.component}>
              {item.children?.map((child, k) => (
                <Route
                  index={child.index}
                  key={k}
                  path={child.path}
                  element={child.component}
                />
              ))}
            </Route>
          ))}
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
