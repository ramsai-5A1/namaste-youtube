import { createSlice } from "@reduxjs/toolkit";

const CommentsSlice = createSlice({
    name: "Comments",
    initialState: {
        comments: []
    },
    reducers: {
        addNewCommentObject: (state, action) => {
            state.comments.splice(30, 1);
            state.comments.push(action.payload);
        },
        addToChildOfId: (state, action) => {
            const recursivelyFind = (arr, action) => {
                if (arr === undefined || arr.length === 0) {
                    return;
                }

                let found = false;
                arr.forEach((value) => {
                    if (found)  return;
                    if (value.id === action.payload.parentId) {
                        value.replies.push(action.payload.parentComment);
                        found = true;
                        return;
                    }
                    found = recursivelyFind(value.replies, action);
                });
                return found;
            }
            recursivelyFind(state.comments, action); 
        }
    }
});

export const { addNewCommentObject, addToChildOfId } = CommentsSlice.actions;
export default CommentsSlice.reducer;