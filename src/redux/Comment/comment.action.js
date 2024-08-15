// actions.js
import * as actionTypes from "./comment.actionTypes";
import api from "@/Api/api";

// Action for creating a comment
export const createComment = (commentData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_COMMENT_REQUEST });
    try {
      const response = await api.post(
        `/api/comments`,
        commentData
      );
      console.log("comment created", response.data)
      dispatch({
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        comment: response.data,
      });
    } catch (error) {
        console.log("error ",error)
      dispatch({
        type: actionTypes.CREATE_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

// Action for deleting a comment
export const deleteComment = (commentId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_COMMENT_REQUEST });
    try {
      await api.delete(
        `/api/comments/${commentId}`
      );
      dispatch({ type: actionTypes.DELETE_COMMENT_SUCCESS, commentId });
    } catch (error) {
        console.log("error ",error)
      dispatch({
        type: actionTypes.DELETE_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

// Action for fetching comments by issueId
export const fetchComments = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_COMMENTS_REQUEST });
    try {
      const response = await api.get(
        `/api/comments/${issueId}`
      );
      dispatch({
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        comments: response.data,
      });
      console.log("fetched comments ",response.data)
    } catch (error) {
        console.log("error ",error)
      dispatch({
        type: actionTypes.FETCH_COMMENTS_FAILURE,
        error: error.message,
      });
    }
  };
};
