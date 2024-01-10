import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onTogglingMenu, toggleMenuWithThis } from "../utils/HeaderSlice";
import ShimmerWatchPage from "./ShimmerWatchPage";

const WatchPage = () => {
    const info = useSelector((store) => store.video.info);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleMenuWithThis(false));
    }, []);

    if (false) {
        return <ShimmerWatchPage/>
    }

    return (
        <div className="flex">
            <BigVideoCard info={info}/>
            <div className="flex flex-col">
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
            </div>
            
        </div>
    )
};

const RightSideVideoCard = () => {
    return (
        <div className="py-4">
            <div className="w-[200px] h-[100px] bg-gray-300 rounded-lg">

            </div>
        </div>
    )
}

const BigVideoCard = ({info}) => {
    console.log('From BIGVIDEO');
    console.log(info);
    const {videoUrl, duration, views, uploadTime, thumbnailUrl, subscriber, title, description, author, id} = info;
    
    return (
        <div className="p-4 ">
            <div className="w-[1000px] h-[500px] bg-gray-300 rounded-lg">

            </div>
        </div>
    )
}

export default WatchPage;