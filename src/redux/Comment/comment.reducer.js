// reducer.js
import * as actionTypes from './comment.actionTypes';

const initialState = {
  comments: [],
  loading: false,
  error: null
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_COMMENT_REQUEST:
    case actionTypes.DELETE_COMMENT_REQUEST:
    case actionTypes.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: [...state.comments, action.comment]
      };
    case actionTypes.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: state.comments.filter(comment => comment.id !== action.commentId)
      };
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.comments
      };
    case actionTypes.CREATE_COMMENT_FAILURE:
    case actionTypes.DELETE_COMMENT_FAILURE:
    case actionTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default commentReducer;
