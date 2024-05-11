export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
  });
  
  export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId,
  });
  
  export const editPost = (postId, newText) => ({
    type: EDIT_POST,
    payload: { postId, newText },
  });
  
  export const addComment = (postId, comment) => ({
    type: ADD_COMMENT,
    payload: { postId, comment },
  });
  
  export const deleteComment = (postId, commentId) => ({
    type: DELETE_COMMENT,
    payload: { postId, commentId },
  });
  