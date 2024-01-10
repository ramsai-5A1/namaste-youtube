import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const AdminPage = () => {
    const isMenuOpened = useSelector((store) => store.header.isMenuOpened);

    return (
        <div className="py-[100px]">
            <h1>AdminPage</h1>
            <h2>Below is outlet component</h2>
            {isMenuOpened && <SideBar/>}
            <Outlet/>
        </div>
    )
};

export default AdminPage;