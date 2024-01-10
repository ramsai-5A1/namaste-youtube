import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {

    const isOpened = useSelector((store) => store.header.isMenuOpened);

    return (
        <div className="flex z-9 py-20">
            {isOpened && <SideBar/>}
            <Outlet/>
        </div>
    )
};

export default Body;