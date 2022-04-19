import { AppHome } from "./pages/app-home.jsx";
import { AdsApp } from "./pages/ads-app.jsx";

const routes = [
  {
    path: "/",
    component: AppHome,
    exact: true,
  },
  {
    path: "/domain/:name",
    component: AdsApp,
    exact: true,
  },
];

export default routes;
