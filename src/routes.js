import React from "react";
import { intl } from "./utils/intl";
const MyDashboard = React.lazy(() =>
  import("./views/RemoteManagement/NewDrive")
);
const Home = React.lazy(() => import("./views/Home"));
const ShowConfig = React.lazy(() =>
  import("./views/RemoteManagement/ShowConfig")
);
const RemoteExplorerLayout = React.lazy(() =>
  import("./views/Explorer/RemoteExplorerLayout")
);
const Login = React.lazy(() => import("./views/Pages/Login"));
const RCloneDashboard = React.lazy(() => import("./views/RCloneDashboard"));
const MountDashboard = React.lazy(() => import("./views/MountDashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// Define the routes as required
const routes = [
  {
    path: "/",
    exact: true,
    name: intl.formatMessage({
      id: "routes.Home",
      defaultMessage: "Home",
    }),
  },
  {
    path: "/newdrive/edit/:drivePrefix",
    name: intl.formatMessage({
      id: "routes.EditRemote",
      defaultMessage: "Edit Remote",
    }),
    component: MyDashboard,
  },
  {
    path: "/newdrive",
    exact: true,
    name: intl.formatMessage({
      id: "routes.NewRemote",
      defaultMessage: "New Remote",
    }),
    component: MyDashboard,
  },
  {
    path: "/login",
    exact: true,
    name: intl.formatMessage({
      id: "routes.LoginPage",
      defaultMessage: "Login Page",
    }),
    component: Login,
  },
  {
    path: "/dashboard",
    name: intl.formatMessage({
      id: "routes.Dashboard",
      defaultMessage: "Dashboard",
    }),
    component: Home,
  },
  {
    path: "/showconfig",
    name: intl.formatMessage({
      id: "routes.Configs",
      defaultMessage: "Configs",
    }),
    component: ShowConfig,
  },
  {
    path: "/remoteExplorer/:remoteName/:remotePath",
    exact: true,
    name: intl.formatMessage({
      id: "routes.Explorer",
      defaultMessage: "Explorer",
    }),
    component: RemoteExplorerLayout,
  },
  {
    path: "/remoteExplorer",
    name: intl.formatMessage({
      id: "routes.Explorer",
      defaultMessage: "Explorer",
    }),
    component: RemoteExplorerLayout,
  },
  {
    path: "/rcloneBackend",
    name: intl.formatMessage({
      id: "routes.RcloneBackend",
      defaultMessage: "Rclone Backend",
    }),
    component: RCloneDashboard,
  },
  {
    path: "/mountDashboard",
    name: intl.formatMessage({
      id: "routes.MountDashboard",
      defaultMessage: "Mount Dashboard",
    }),
    component: MountDashboard,
  },
];

export default routes;
