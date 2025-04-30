import { DashboardPage } from "./pages/dashboard"
import { Auth } from "./pages/auth"
import { Account } from "./pages/accounts"

const routes = [
    { path: "/", element: <Auth /> },
    { path: "/dashboardPage", element: <DashboardPage /> },
    { path: "/account", element: <Account/>}
]

export default routes