import { type RouteConfig, index } from "@react-router/dev/routes";

const routes: RouteConfig = [
  index("routes/home.tsx"),
  { path: "/about-us", file: "about-us.jsx" },
  { path: "/register", file: "register.jsx" },
  { path: "/partnership", file: "partnership.jsx" },
  { path: "/index", file: "_index.jsx" },
  { path: "/coverage", file: "services-coverage.jsx"},
  { path: "/services", file: "services.jsx" },
];

export default routes;
