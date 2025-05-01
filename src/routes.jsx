import { DashboardPage } from "./pages/dashboard"
import { Auth } from "./pages/auth"
import { ProductPage } from "./pages/product"
import { Account } from "./pages/accounts"

const routes = [
    { path: "/", element: <Auth /> },
    { path: "/dashboardPage", element: <DashboardPage /> },
    { path: "/productPage", element: <ProductPage/> },
    { path: "/account", element: <Account/>}
]

export default routes