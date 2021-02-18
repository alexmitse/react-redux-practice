import { CREATE_POST, FETCH_POST } from "./types";

const initialState = {
  posts: [],
  fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {...state, posts: [...state.posts, action.payload]}
    case FETCH_POST:
      return {...state, fetchedPosts: action.payload}
    default:
      return state;
  }
  
}