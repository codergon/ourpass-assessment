const routes = [
  {
    path: "/",
    component: () => import("layouts/default.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/dashboard"),
      },
      {
        alias: "",
        path: "invoices",
        component: () => import("pages/invoices"),
      },
      {
        path: "/activity",
        component: () => import("pages/activity"),
      },
      {
        path: "/wallet",
        component: () => import("pages/wallet"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
