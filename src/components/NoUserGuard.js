import { Navigate,Outlet } from "react-router-dom"

;
export default function NoUserGuard() {
    const data= localStorage.getItem('auth');
    const  user=JSON.parse(data)
   if(!user.accessToken){
    return <Navigate to="/login" replace/>
   }
    return <Outlet/>
}
