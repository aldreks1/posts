import { combineReducers } from "redux";
import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "../actions/actions";

const initialState = [
  {
    id: 1,
    title:
      "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.",
    comments: [
      { id: 1, text: "Самый яркий комментарий в этом посте" },
      { id: 2, text: "Один из бессмысленный комментарий в этом посте" },
    ],
  },
  {
    id: 2,
    title:
      "Краткосрочное вымышленное преломление может выполнять особую роль в   пространстве главной роли игрока",
    comments: [{ id: 1, text: "Очень научно и непонятно" }],
  },
];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload);
    case EDIT_POST:
      return state.map((post) =>
        post.id === action.payload.postId
          ? { ...post, title: action.payload.newText }
          : post
      );
    case ADD_COMMENT:
      return state.map((post) =>
        post.id === action.payload.postId
          ? {
              ...post,
              comments: [...post.comments, action.payload.comment],
            }
          : post
      );
    case DELETE_COMMENT:
      return state.map((post) =>
        post.id === action.payload.postId
          ? {
              ...post,
              comments: post.comments.filter(
                (comment) => comment.id !== action.payload.commentId
              ),
            }
          : post
      );
    default:
      return state;
  }
};
export default combineReducers({
  posts: postsReducer,
});
