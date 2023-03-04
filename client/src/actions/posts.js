import * as api from "../api";

export const getPost = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPost();
        dispatch({type: 'FETCH_ALL', payload: []})
    } catch (error) {
        console.log(error.message);
    }
}