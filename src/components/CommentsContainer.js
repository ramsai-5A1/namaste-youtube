import { useEffect, useState } from "react";
import { DUMMY_COMMENTS_API } from "../utils/constants";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import { Comments_Data } from "../utils/Mocks/Comments_Data";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addNewCommentObject, addToChildOfId } from "../utils/CommentsSlice";
import { incrementeValue } from "../utils/GenerateId";


const CommentsContainer = () => {

    const dispatch = useDispatch();
    const comments = useSelector((store) => store.comments.comments);

    useEffect(() => {
        // const fetchCommentsFromApi = async () => {
        //     const rawData = await fetch(DUMMY_COMMENTS_API);
        //     const data = await rawData.json();
        //     setComments(data.comments);
        // }
        // fetchCommentsFromApi();
        Comments_Data.forEach((obj) => dispatch(addNewCommentObject(obj)));
    }, []);

    if (comments === undefined || comments.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="m-2 p-2">
            <h1 className="font-bold">Comments</h1>
            { comments.map((comment) => <SingleComment key={comment.id} info={comment}/>)}
        </div>
    )
};

const SingleComment = ({info}) => {
    const { user, body, replies} = info;
    const value = useSelector((store) => store.generateId.value);
    const dispatch = useDispatch();
    
    const [commentedNewReply, setCommentedNewReply] = useState(false);
    const [repliesOpened, setRepliesOpened] = useState(false);

    return (
        <div className="p-1">
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

                            <div className="hover:cursor-pointer hover:bg-gray-400 p-1" onClick={() => setCommentedNewReply(!commentedNewReply)}>
                                <span className="font-bold text-sm">Replyy</span>
                            </div>
                        </div>
                    </div>
                </div>
                {commentedNewReply && <NewCommentReply dispatch={dispatch} value={value} id={info.id}/>}

                {replies !== undefined && replies.length > 0 && <div className="flex">
                    <span className="text-blue-600 pl-14 ">{repliesOpened ? <FaCaretUp/> : <FaCaretDown/>}</span>
                    <span onClick={() => setRepliesOpened(!repliesOpened)} className="text-blue-600 px-1 hover:cursor-pointer">
                        replies
                    </span>
                </div>}

                <div className="flex flex-col px-10 border border-l-black p-1 ml-5">
                    {repliesOpened && replies !== undefined && replies.length > 0 && replies.map((value) => <SingleComment key={value.id} info={value}/>)}
                </div>
            </div>
        </div>
    )
}

const NewCommentReply = ({dispatch, value, id}) => {

    const [text, setText] = useState("");

    const handleKeyStroke = (event) => {
        if (event.key === "Enter") {
            dispatch(incrementeValue());
            dispatch(addToChildOfId({
                parentId: id, 
                parentComment: {
                    id: value,
                    body: text,
                    postId: 100,
                    user: {
                        username: "Ram",
                        id: 101
                    },
                    replies: []}
                }));
            setText("");
        } 
    }

    return (
        <div className="pl-[150px]">
            <input
                className="w-[500px] h-10 p-1 m-2 border"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyStroke}
            />
        </div>
    )
}

export default CommentsContainer;