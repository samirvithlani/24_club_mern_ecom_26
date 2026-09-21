import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "../components/common/Login"
import { HeroPage } from "../pages/HeroPage"
import { UserNavbar } from "../components/user/UserNavbar"
import { AdminNavbar } from "../components/admin/AdminNavbar"
import { UserDashboard } from "../components/user/UserDashboard"
import { AdminDashboard } from "../components/admin/AdminDashboard"
import { AddProduct } from "../components/admin/AddProduct"
import { UserCart } from "../components/user/UserCart"

const router = createBrowserRouter([
    {
        path:"/",
        element:<HeroPage/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/user",
        element:<UserNavbar/>,
        children:[
            {
                //dont give /
                path:"dashboard",
                element:<UserDashboard/>
            },
            {
                path:"cart",
                element:<UserCart/>
            }
        ]
    },
    {
        path:"/admin",
        element:<AdminNavbar/>,
        children:[
            {
                path:"dashboard",
                element:<AdminDashboard/>
            },
            {
                path:"add-product",
                element:<AddProduct/>
            }
        ]
    }
])


const AppRouter = ()=>{

    return <RouterProvider router={router}></RouterProvider>
}
export default AppRouter