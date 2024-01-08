import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
    return (
        <div className="bg-blue-100 flex">
            <SideBar/>
            <MainContainer/>
        </div>
    )
};

export default Body;