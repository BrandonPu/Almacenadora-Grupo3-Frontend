import { DashboardPage } from "./pages/dashboard"
import { Auth } from "./pages/auth"
import { ProductPage } from "./pages/product"
import { ClientPage } from "./pages/client"
import { Account } from "./pages/accounts"
import { CategoryPage } from "./pages/category";
import { SupplierPage } from "./pages/suppliers/SupplierPage";
import { ReportPage } from "./pages/reports"

const routes = [
    { path: "/", element: <Auth /> },
    { path: "/dashboardPage", element: <DashboardPage /> },
    { path: "/productPage", element: <ProductPage/> },
    { path: "/account", element: <Account/>},
    { path: "/categoriesPage", element: <CategoryPage/>},
    { path: "/supplierPage", element: <SupplierPage/>},
    { path: "/reportPage", element: <ReportPage/>},
    { path: "/clientPage", element: <ClientPage/>}
]

export default routes