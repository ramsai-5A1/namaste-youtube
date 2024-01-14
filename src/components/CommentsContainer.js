import { useEffect, useState } from "react";
import { DUMMY_COMMENTS_API } from "../utils/constants";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import { Comments_Data } from "../utils/Mocks/Comments_Data";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";


const CommentsContainer = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchCommentsFromApi = async () => {
            const rawData = await fetch(DUMMY_COMMENTS_API);
            const data = await rawData.json();
            setComments(data.comments);
        }
        fetchCommentsFromApi();
    }, []);

    if (comments === undefined || comments.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="m-2 p-2">
            <h1 className="font-bold">Comments</h1>
            <SingleComment info={Comments_Data[0]} topLevel={true}/>
            {Comments_Data != undefined && Comments_Data.length > 0 && Comments_Data.map((comment) => <SingleComment info={comment}/>)}
            {/* {comments.map((comment) => <SingleComment key={comment.user.username} info={comment}/>)} */}
        </div>
    )
};

const SingleComment = ({info}) => {
    const { user, body, replies} = info;

    const [repliesOpened, setRepliesOpened] = useState(false);

    return (
        <div className="">
            <div className="bg-gray-100 p-2 rounded-lg">
                <div className="flex p-2">
                    <div className="py-3">
                        <div className="w-10 h-10  rounded-full bg-gray-300">
                            <img
                                alt="user"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkWrK6FhDuNa-QZwqJe71dE7xYVGV1ZVEb9usTCA5NRT8FlyheMHseMYYnXKLsKQoiBw&usqp=CAU"
                                className="rounded-full w-10 h-10"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col p-2">
                        <div className="flex">
                            <span className="font-bold">{user.username}</span>
                            <span className="px-2">{"6 months"} ago</span>
                        </div>
                        <span>{body}</span>
                        <div className="flex p-1">
                            <div className="">
                                <GoThumbsup />
                            </div>

                            <div className="px-6">
                                <GoThumbsdown/>
                            </div>

                            <div className="">
                                <span className="font-bold text-sm">Reply</span>
                            </div>
                        </div>
                    </div>
                </div>

                {replies !== undefined && replies.length > 0 && <div className="flex">
                    <span className="text-blue-600 pl-14 ">{repliesOpened ? <FaCaretUp/> : <FaCaretDown/>}</span>
                    <span onClick={() => setRepliesOpened(!repliesOpened)} className="text-blue-600 px-1 hover:cursor-pointer">
                        replies
                    </span>
                </div>}

                <div className="flex flex-col px-10">
                    {repliesOpened && replies !== undefined && replies.length > 0 && replies.map((value) => <SingleComment info={value}/>)}
                </div>
            </div>
        </div>
    )
}

export default CommentsContainer;