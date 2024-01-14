import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/HeaderSlice";
import ShimmerWatchPage from "./ShimmerWatchPage";
import { Link } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { Live_Chat_Data } from "../utils/Mocks/Live_Chat_Data";
import { addDataToSlice, removeExcessDataFromSlice } from "../utils/LiveChatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

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
            <BigVideoCard key={info.id} info={info}/>
            
            <div className="flex flex-col">
                <LiveChatCard/>
                {allVideos.map((video) => (
                    <RightSideVideoCard key={video.id + 100} video={video}/>
                ))}
            </div>
            
        </div>
    )
};

const LiveChatCard = () => {
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.liveChat.messages);
    useEffect(() => {
        // const timer = setInterval(() => {
        //     console.log("Polling from server");
        //     dispatch(addDataToSlice({
        //         id: 1,
        //         message: generateRandomMessage(),
        //         name: generateRandomName()
        //     }));
        // }, 500);
        
        // return () => {
        //     clearInterval(timer);
        // }
    }, []);

    return (
        <div className="py-4">
            <div className="w-96 h-[500px] overflow-y-scroll bg-gray-300 shadow-lg rounded-lg">
                <div className="py-4  flex flex-col-reverse">
                    {messages.map((info, index) => <SingleMessage key={index} info={info}/>)}
                </div>
            </div>
        </div>
    )
}

const SingleMessage = ({info}) => {
    return (
        <div>
            <div className="flex p-2 shadow-sm">
                <div className="p-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200">
                        <img alt="user-profile" className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkWrK6FhDuNa-QZwqJe71dE7xYVGV1ZVEb9usTCA5NRT8FlyheMHseMYYnXKLsKQoiBw&usqp=CAU"/>
                    </div>
                </div>

                <div>
                    <span className="p-1 font-bold">{info.name}</span>
                    <span>{info.message}</span>
                </div>
            </div>
        </div>
    )
}

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

            <CommentsContainer/>
        </div>
    )
}

export default WatchPage;