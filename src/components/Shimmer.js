
const Shimmer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
        </div>
    )
};

const ShimmerCard = () => {
    return (
        <div className="p-4 ">
            <div className="w-[300px] h-[200px] p-2 rounded-lg border bg-gray-400">

            </div>

            <div className="flex p-2 justify-between">
                <div className="bg-gray-400 w-10 h-10 p-3 rounded-full">
                </div>

                <div className="flex flex-col justify-between">
                    <div className="w-[200px] h-[20px] rounded-lg bg-gray-400">
                    </div>

                    <div className="w-[200px] h-[5px] py-2  rounded-lg bg-gray-400">
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Shimmer;