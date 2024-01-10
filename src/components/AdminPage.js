import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminPage = () => {
    console.log("AdminPage rendered");
    return (
        <div className="bg-green-200 py-[100px]">
            <h1>AdminPage</h1>
            <h2>Below is outlet component</h2>
            <Outlet/>
        </div>
    )
};

export default AdminPage;