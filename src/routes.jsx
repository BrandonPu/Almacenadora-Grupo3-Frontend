import { DashboardPage } from "./pages/dashboard"
import { Auth } from "./pages/auth"
import { ProductPage } from "./pages/product"
import { ClientPage } from "./pages/client"
import { Account } from "./pages/accounts"
import { CategoryPage } from "./pages/category";
import { SupplierPage } from "./pages/suppliers/SupplierPage";
import { ReportPage } from "./pages/reports"
import { UserPage } from "./pages/user/UserPage";

import { PrivateRoute } from "./components/PrivateRoute"

const routes = [
  { path: "/", element: <Auth /> },
  { path: "/dashboardPage", element: <PrivateRoute><DashboardPage /></PrivateRoute> },
  { path: "/productPage", element: <PrivateRoute><ProductPage /></PrivateRoute> },
  { path: "/account", element: <PrivateRoute><Account /></PrivateRoute> },
  { path: "/categoriesPage", element: <PrivateRoute><CategoryPage /></PrivateRoute> },
  { path: "/supplierPage", element: <PrivateRoute><SupplierPage /></PrivateRoute> },
  { path: "/reportPage", element: <PrivateRoute><ReportPage /></PrivateRoute> },
  { path: "/clientPage", element: <PrivateRoute><ClientPage /></PrivateRoute> },
  { path: "/userPage", element: <PrivateRoute><UserPage /></PrivateRoute> },
];

export default routes