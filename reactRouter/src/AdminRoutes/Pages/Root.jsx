import { Outlet } from "react-router-dom";
import AdminFooter from "./Foot";
import Nav from "./Nav";

export function Root(){
    return(
        <>
            <Nav/>
            <Outlet/>
            <AdminFooter/>
        </>
    )
}