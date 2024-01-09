import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {

    const isOpened = useSelector((store) => store.header.menuClicked);

    return (
        <div className="flex z-9 py-20">
            {isOpened && <SideBar/>}
            <MainContainer/> 
        </div>
    )
};

export default Body;