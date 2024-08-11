// actions.js
import * as actionTypes from "./ActionTypes";
import api from "@/Api/api";

// /api/issues/1/status/in_progress

// Action for fetching issues
export const fetchIssues = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST });
    try {
      const response = await api.get(`/api/issues/project/${id}`);
      console.log("fetch issues", response.data);
      dispatch({
        type: actionTypes.FETCH_ISSUES_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ISSUES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchIssueById = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST });
    try {
      const response = await api.get(`/api/issues/${id}`);
      console.log("fetch issue by id", response.data);
      dispatch({
        type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };
};

export const updateIssueStatus = ({id,status}) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST });
    try {
      const response = await api.put(`/api/issues/${id}/status/${status}`);
      console.log("update issue status", response.data);
      dispatch({
        type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
        error: error.message,
      });
    }
  };
};

export const assignedUserToIssue= ({issueId,userId}) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST});
    try {
      const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`);
      console.log("assigned issue --- ", response.data);
      dispatch({
        type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      console.log("error ",error)
      dispatch({
        type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
        error: error.message,
      });
    }
  };
};

// Action for creating an issue
export const createIssue = (issueData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_ISSUE_REQUEST });
    try {
      const response = await api.post("/api/issues", issueData);
      dispatch({
        type: actionTypes.CREATE_ISSUE_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};

// Action for updating an issue
export const updateIssue = (issueId, updatedData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ISSUE_REQUEST });
    try {
      const response = await api.put(`/api/issues/${issueId}`, updatedData);
      dispatch({
        type: actionTypes.UPDATE_ISSUE_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};

// Action for deleting an issue
export const deleteIssue = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST });
    try {
      await api.delete(`/api/issues/${issueId}`);
      dispatch({ type: actionTypes.DELETE_ISSUE_SUCCESS, issueId });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};
