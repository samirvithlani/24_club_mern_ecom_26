import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"


const ProtectedRoutes= ({children,role}) => {

    const [isLogin, setisLogin] = useState(false)
    const [loading, setloading] = useState(true)
    


    useEffect(()=>{
        const token = localStorage.getItem("token")
        const roleData = localStorage.getItem("role") //user
        
        if(token){
            
            if(role==roleData){
                setisLogin(true)
            }
        }

        setloading(false)
    },[])
    
    if(loading==true){
        return <h1>Loading..</h1>
    }

    if(isLogin==true){
        return children
    }
    if(isLogin==false){
        return <Navigate to={"/login"}></Navigate>
    }


}
export default ProtectedRoutes