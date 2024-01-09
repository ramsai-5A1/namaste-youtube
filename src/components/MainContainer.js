import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    return (
        <div className="w-full px-100 overflow-y-auto h-screen">
            <div className="m-2 p-2 border">
                <ButtonList/>
                <VideoContainer/>
            </div>
        </div>
    )
};

export default MainContainer;