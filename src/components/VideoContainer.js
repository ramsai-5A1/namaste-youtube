import { useEffect, useState } from "react";
import { BACKEND_DATA_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAllVideos, addVideoInfo } from "../utils/VideoSlice";
import { MOCK_DATA_1 } from "../utils/Mocks/MOCK_DATA_1";

const VideoContainer = () => {
    const [videosData, setVideosData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDataFromApi = async () => {
            //  const rawData = await fetch(BACKEND_DATA_API);
            //  const data = await rawData.json();
             const data = MOCK_DATA_1;
             dispatch(addAllVideos(data));
             setTimeout(() => {
                setVideosData(data);
             }, 2000); 
        }
        fetchDataFromApi();
    }, []);

    if (videosData === undefined || videosData.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                
                {videosData.map((video) => (
                    <Link key={video.id} to="/watch">
                        {video.isAdd ? <AdVideoCard key={video.id} dataObj={video}/> : <VideoCard key={video.id} dataObj={video}/> }
                    </Link>
                ))}
        </div>
    )
};

const AdVideoCard = ({dataObj}) => {
    return (
        <div className="border border-red-600 rounded-lg">
            <VideoCard dataObj={dataObj}/>
        </div>
    )
};

const VideoCard = ({dataObj}) => {
    const {thumbnailUrl, views, title, author, uploadTime, isAdd} = dataObj;
    const dispatch = useDispatch();

    const insertDataIntoSlice = () => {
        dispatch(addVideoInfo(dataObj));
    }

    return (
        <div onClick={insertDataIntoSlice}  className="shadow-lg p-2 m-2 hover:transition hover:cursor-pointer hover:scale-110 transition-transform">
            <div>
                <img 
                    src={thumbnailUrl}
                    className=" w-[300px] h-[200px] rounded-lg"
                />
            </div>

            <div className="flex">
                <img
                    src={thumbnailUrl}
                    className="rounded-full w-10 h-10 m-1"
                />
                <div>
                    <span className="py-2 px-1 font-bold">{title}</span>
                    <span>{author}</span>
                    <div>
                        <span>{views} views</span>
                        <span className="px-2">{uploadTime}</span>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default VideoContainer;