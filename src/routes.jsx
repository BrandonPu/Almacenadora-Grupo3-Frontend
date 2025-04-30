import { DashboardPage } from "./pages/dashboard"
import { Auth } from "./pages/auth"
import { ProductPage } from "./pages/product"

const routes = [
    { path: "/*", element: <Auth /> },
    { path: "/dashboardPage", element: <DashboardPage /> },
    { path: "/productPage", element: <ProductPage/> },
]

export default routes