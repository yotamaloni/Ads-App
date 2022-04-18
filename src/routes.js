import { AppHome } from "./pages/app-home.jsx";
import { BoardApp } from "./pages/board-app.jsx";

const routes = [
  {
    path: "/",
    component: AppHome,
    exact: true,
  },
  {
    path: "/board",
    component: BoardApp,
    exact: true,
  },
];

export default routes;
