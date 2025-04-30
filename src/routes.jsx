import { DashboardPage } from "./pages/dashboard"
import { Auth } from "./pages/auth"

const routes = [
    { path: "/", element: <Auth /> },
    { path: "/dashboardPage", element: <DashboardPage /> },
]

export default routes