// import { createBrowserHistory } from "history";
import { IRouteItem } from "../common/interface";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../modules/layout/AppLayout/AppLayout";
import Home from "../modules/Home/Home";
import ServicesPage from "../modules/Services/services";

export const PublicPaths = {
  CONTACT: "contact",
  ABOUT: "about",
  SERVICES: "services",
  PROFILE: "profile",
  SHARE_HOLDER: "share-holder",
  TEAMS: "teams",
  CAREER: "career",
  LEADERSHIP: "leadership",
  COMMISSION: "commission",
  WARE_HOUSE: "ware-house",
  IMPORT_EXPORT: "import-export",
  MANUFACTURER: "manufacturers",
};

export const DashboardPaths = {
  HOME: "/",
};

const publicRoutes: IRouteItem[] = [
  {
    path: PublicPaths.SERVICES,
    component: <ServicesPage />,
    exact: true,
  },
];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          {publicRoutes.map((item, i) => (
            <Route key={i} path={item.path} element={item.component} />
          ))}
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
