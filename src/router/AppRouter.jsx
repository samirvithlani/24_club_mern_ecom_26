import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "../components/common/Login"
import { HeroPage } from "../pages/HeroPage"

const router = createBrowserRouter([
    {
        path:"/",
        element:<HeroPage/>
    },
    {
        path:"/login",
        element:<Login/>
    }
])


const AppRouter = ()=>{

    return <RouterProvider router={router}></RouterProvider>
}
export default AppRouter