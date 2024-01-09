import { ImHome } from "react-icons/im";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { LiaFileVideoSolid } from "react-icons/lia";
import { MdWatchLater } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";



const SideBar = () => {
    return (
        <div className="w-2/12 overflow-y-auto h-screen">
        <div className="py-2 m-2">
            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <ImHome className="px-2 h-[60px] w-10"/>
                <span className="p-4">Home</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <SiYoutubeshorts className="px-2 h-[60px] w-10"/>
                <span className="p-4">Shorts</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <MdSubscriptions className="px-2 h-[60px] w-10"/>
                <span className="p-4">Subscriptions</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <FaHistory className="px-2 h-[60px] w-10"/>
                <span className="p-4">History</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <LiaFileVideoSolid className="px-2 h-[60px] w-10"/>
                <span className="p-4">Your videos</span>
            </div>

            <div className="m-2 border border-gray-400">
            </div>

            <div className="flex justify-normal p-2 hover:bg-gray-200 hover:cursor-pointer hover:rounded-3xl">
                <span className="font-bold ">You</span>
                <FaAngleRight className="px-2 h-[20px] w-10"/>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <FaFire className="px-2 h-[60px] w-10"/>
                <span className="p-4">Trending</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <IoMdMusicalNotes className="px-2 h-[60px] w-10"/>
                <span className="p-4">Music</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <ImProfile className="px-2 h-[60px] w-10"/>
                <span className="p-4">Your channel</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <FaHistory className="px-2 h-[60px] w-10"/>
                <span className="p-4">History</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <LiaFileVideoSolid className="px-2 h-[60px] w-10"/>
                <span className="p-4">Your videos</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <MdSubscriptions className="px-2 h-[60px] w-10"/>
                <span className="p-4">Watch later</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <BiSolidLike className="px-2 h-[60px] w-10"/>
                <span className="p-4">Liked videos</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <MdOutlineStorage className="px-2 h-[60px] w-10"/>
                <span className="p-4">Podcasts</span>
            </div>

            <div className="m-2 border border-gray-400">
            </div>

            <div>
                <span className="font-bold">Explore</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <FaFire className="px-2 h-[60px] w-10"/>
                <span className="p-4">Trending</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <IoMdMusicalNotes className="px-2 h-[60px] w-10"/>
                <span className="p-4">Music</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <ImProfile className="px-2 h-[60px] w-10"/>
                <span className="p-4">Your channel</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <FaHistory className="px-2 h-[60px] w-10"/>
                <span className="p-4">History</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <MdSubscriptions className="px-2 h-[60px] w-10"/>
                <span className="p-4">Watch later</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <BiSolidLike className="px-2 h-[60px] w-10"/>
                <span className="p-4">Liked videos</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <MdOutlineStorage className="px-2 h-[60px] w-10"/>
                <span className="p-4">Podcasts</span>
            </div>

            <div className="m-2 border border-gray-400">
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <MdSubscriptions className="px-2 h-[60px] w-10"/>
                <span className="p-4">Settings</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <BiSolidLike className="px-2 h-[60px] w-10"/>
                <span className="p-4">Report history</span>
            </div>

            <div className="flex justify-normal hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
                <MdOutlineStorage className="px-2 h-[60px] w-10"/>
                <span className="p-4">Help</span>
            </div>

            <div className="m-2 border border-gray-400">
            </div>

            <div className="rounded-xl m-2 p-2">
                {/* <div className="">
                    <span className="hover:cursor-pointer font-bold p-2">About</span>
                    <span className="hover:cursor-pointer font-bold ">Press</span>
                    <span className="hover:cursor-pointer font-bold py-2 px-1">Copyright</span>
                    <span className="hover:cursor-pointer font-bold py-2 px-1">Contact us</span>
                    <span className="hover:cursor-pointer font-bold py-2 px-1">Creator</span>
                    <span className="hover:cursor-pointer font-bold py-2 px-1">Advertise</span>
                    <span className="hover:cursor-pointer font-bold py-2 px-1">Developers</span>
                </div> */}

                {/* <div className="m-3 border border-white">
                </div> */}

                <div>
                    <span className="hover:cursor-pointer font-bold p-2">Terms</span>
                    <span className="hover:cursor-pointer font-bold p-2">Privacy Policy & Safety</span>
                    <span className="hover:cursor-pointer font-bold p-2">How YouTube works</span>
                    <span className="hover:cursor-pointer font-bold p-2">Test new features</span>
                </div>
                
               
                <span className="p-2">© 2024 Google LLC</span>
            </div>
            
            </div>
        </div>
    )
};

export default SideBar;