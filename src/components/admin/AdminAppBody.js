import React from "react";
import AdminSiteBar from "./AdminSiteBar";
import AdminNavBar from "./AdminNavBar";
import PageHeader from "./PageHeader";
import AdminFooter from "./AdminFooter";
import LoadingOverlay from "react-loading-overlay";
import { Navigate, useLocation } from "react-router-dom";
import { uiRoutes } from "../../routes/ui/uiRoutes";
import { getUserToken, getUserPermissions, getUserRoles } from "../../config/user";

const AdminAppBody = (props) => {
  const location = useLocation();
  const data = sessionStorage.getItem('udata');

  if (data === null) {
    return <Navigate to={uiRoutes.userHome} />
  }

  let path =props.permission; 
  //location.pathname.replace("/", "");
  if (getUserToken() && !getUserPermissions().includes(path)) {
   // return <Navigate to={uiRoutes.notAuthrized} />
  }

  return (
    <LoadingOverlay
      active={props.loading}
      spinner
      text="Loading your content..."
    >
      <div className="page">
        <AdminSiteBar />
        <AdminNavBar />
        <div className="page-wrapper">
          <PageHeader heading={props.heading} />
          {props.content}
          <AdminFooter />
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default AdminAppBody;
