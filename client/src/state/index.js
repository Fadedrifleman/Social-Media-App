import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: "null",
    token: "null",
    post: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if(state.user){
                state.user.friends = action.friends;
            } else {
                console.error("user friends non-existent")
            }
        },
        setPosts: (state, action) => {
            state.post = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPost =  state.post.map((post) => {
                if(post.id === action.post_id) return action.payload.post;
                return post;
            });
            state.post  = updatedPost;
        }
    }
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost} = authSlice.actions;
export default authSlice.reducer;