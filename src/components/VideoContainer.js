import MOCK_DATA from "../utils/videoContent.json";

const VideoContainer = () => {
    return (
        <div className="flex flex-wrap w-10/12">
                <VideoCard dataObj = {MOCK_DATA["videos"][0]}/>
                {MOCK_DATA["videos"].map((video) => <VideoCard dataObj={video}/>)}
        </div>
    )
};

const VideoCard = ({dataObj}) => {
    const {imageUrl, name, releasedOn, views, channelProfile} = dataObj;

    return (
        <div className="p-2 m-2 hover:transition hover:cursor-pointer hover:scale-110 transition-transform">
            <div>
                <img 
                    src={imageUrl}
                    className=" w-[300px] h-[200px] rounded-lg"
                />
            </div>

            <div className="flex">
                <img
                    src={channelProfile}
                    className="rounded-full h-10 m-1"
                />
                <div>
                    <span className="py-2 px-1 font-bold">{name}</span>
                    <div>
                        <span>{views} views</span>
                        <span className="px-2">{releasedOn}</span>
                    </div>
                </div>
               
            </div>
            
            {/* <div className="">
                <span>{views} views</span>
                <span className="px-2">{releasedOn}</span>
            </div> */}
        </div>
    )
}

export default VideoContainer;