import HomePage from "../HomePage";
import RegisterCorporatorPage from "../container/admin/corporator/RegisterCorporatorPage";
import CorporatorListPage from "../container/super_admin/corporators/CorporatorListPage";
import { uiRoutes } from "./ui/uiRoutes";

export const routes = [
  {
    path: uiRoutes.home,
    role: ["Admin"],
    type: "Private",
    component: () => <HomePage />
  },
  {
    path: uiRoutes.admin.corporator.create,
    role: ["Admin"],
    type: "Private",
    component: () => <RegisterCorporatorPage />
  },
  {
    path: uiRoutes.admin.corporator.create,
    role: ["Admin"],
    type: "Private",
    component: () => <CorporatorListPage />
  }
];
