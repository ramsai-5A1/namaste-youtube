import { useEffect, useState } from "react";
import { DUMMY_COMMENTS_API } from "../utils/constants";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";

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
            {comments.map((comment) => <SingleComment key={comment.user.username} info={comment}/>)}
        </div>
    )
};

const SingleComment = ({info}) => {
    const { user, body} = info;
    console.log("Info");
    console.log(info);
    return (
        <div className="">
            <div className="flex p-2">
                <div className="py-3">
                    <div className="w-10 h-10  rounded-full bg-gray-300"></div>
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
        </div>
    )
}

export default CommentsContainer;