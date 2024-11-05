import { Navigate, Outlet } from "react-router-dom";
import { UI_ENDPOINTS } from "../utils/endpoints";
import { ContactUsPage } from "../pages/contact-page";

type Props = {
  isAuthenticated: boolean;
};

export const PublicRoute = ({ isAuthenticated }: Props) => {
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={UI_ENDPOINTS.DASHBOARD} />
  );
};

export const PUBLIC_PAGES = [{
    path: UI_ENDPOINTS.CONTACT_US,
    component:  <ContactUsPage />
}]
