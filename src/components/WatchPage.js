import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/HeaderSlice";
import ShimmerWatchPage from "./ShimmerWatchPage";
import { Link } from "react-router-dom";

const WatchPage = () => {
    const info = useSelector((store) => store.video.info);
    const dispatch = useDispatch();
    const allVideos = useSelector((store) => store.video.allVideos);

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    if (allVideos === undefined || allVideos.length === 0) {
        return <ShimmerWatchPage/>
    }

    return (
        <div className="flex">
            <BigVideoCard info={info}/>
            <div className="flex flex-col">
                {allVideos.map((video) => (
                    <RightSideVideoCard video={video}/>
                ))}
            </div>
            
        </div>
    )
};

const RightSideVideoCard = ({video}) => {
    const {videoUrl, duration, views, uploadTime, thumbnailUrl, subscriber, title, description, author, id} = video;

    return (
        <div className="hover:cursor-pointer">
            <Link to="/">
                <div className="py-2 flex ">
                    <img className="w-[200px] h-[100px] rounded-lg" src={thumbnailUrl}/>
                    <div className="flex flex-col p-1">
                        <span className="font-bold p-2">{title}</span>
                        <span>{author}</span>
                        <div>
                            <span>{views} .</span>
                            <span>{uploadTime}</span>
                        </div>
                    </div>
                </div>
                </Link>
        </div>
    )
}

const BigVideoCard = ({info}) => {
    const {videoUrl, duration, views, uploadTime, thumbnailUrl, subscriber, title, description, author, id} = info;

    return (
        <div className="p-4 ">
            <div className="w-[1000px] h-[500px] bg-gray-300 hover:cursor-pointer rounded-lg">
            <iframe width="1000" height="500" className="rounded-xl " src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default WatchPage;