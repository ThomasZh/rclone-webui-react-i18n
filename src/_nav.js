import { intl } from "./utils/intl";

export default {
  items: [
    {
      name: intl.formatMessage({
        id: "nav.Dashboard",
        defaultMessage: "Dashboard",
      }),
      url: "/dashboard",
      icon: "icon-speedometer",
    },
    {
      name: intl.formatMessage({
        id: "nav.Configs",
        defaultMessage: "Configs",
      }),
      url: "/showconfig",
      icon: "icon-note",
    },
    {
      name: intl.formatMessage({
        id: "nav.Explorer",
        defaultMessage: "Explorer",
      }),
      url: "/remoteExplorer",
      icon: "icon-screen-desktop",
    },
    {
      name: intl.formatMessage({
        id: "nav.Backend",
        defaultMessage: "Backend",
      }),
      url: "/rcloneBackend",
      icon: "icon-star",
    },
    {
      name: intl.formatMessage({
        id: "nav.Mounts",
        defaultMessage: "Mounts",
      }),
      url: "/mountDashboard",
      icon: "fa fa-hdd-o",
    },
    {
      name: intl.formatMessage({
        id: "nav.LogOut",
        defaultMessage: "Log Out",
      }),
      url: "/login",
      icon: "icon-logout",
    },
  ],
};
