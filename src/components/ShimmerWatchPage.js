

const ShimmerWatchPage = () => {
    return (
        <div className="flex">
            <BigVideoCard/>
            <div className="flex flex-col">
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
                <RightSideVideoCard/>
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
        <div className="py-4 flex">
            <div className="w-[200px] h-[100px] bg-gray-300 rounded-lg">
            </div>

            <div className="p-2 flex flex-col justify-start">
                <div className="w-[120px] h-[10px] bg-gray-300  rounded-sm">
                </div>

                <div className="w-[100px] h-[6px]   rounded-sm">
                </div>

                <div className="w-[100px] h-[10px] bg-gray-300  rounded-sm">
                </div>
            </div>
            
        </div>
    )
}

const BigVideoCard = () => {
    return (
        <div className="p-4 ">
            <div className="w-[1000px] h-[500px] bg-gray-300 rounded-lg">
            </div>
            <div className="m-2 p-1">
                <div className="bg-gray-300 w-[500px] h-[15px] rounded-md p-2">
                </div>
                <div className="flex p-1">
                    <div className="w-[50px] h-[50px] rounded-full bg-gray-300">
                    </div>
                    <div className="w-[20px]"></div>
                    <div className="flex flex-col py-3">
                        <div className="bg-gray-300 w-[200px] h-[15px] rounded-md"></div>
                        <div className=" w-[20px] h-[10px]"></div>
                        <div className="bg-gray-300 rounded-md w-[200px] h-[10px]"></div>
                    </div>
                </div>
                
                <div className="bg-gray-300 w-[1000px] h-[200px] rounded-xl">

                </div>
                
            </div>
            
        </div>
    )
}

export default ShimmerWatchPage;