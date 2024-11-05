import { Navigate, Outlet } from "react-router-dom";
import { UI_ENDPOINTS } from "../utils/endpoints";
import { DashBoardPage } from "../pages/dashboard-page";

type Props = {
  isAuthenticated: boolean;
};

export const PrivateRoute = ({ isAuthenticated }: Props) => {
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
};

export const PRIVATE_PAGES = [{
    path: UI_ENDPOINTS.DASHBOARD,
    component:  <DashBoardPage />
}]
