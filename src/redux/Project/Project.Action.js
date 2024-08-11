// actions.js
import * as actionTypes from "./ActionTypes";
import api, { API_BASE_URL } from "@/Api/api";

// Action for fetching projects
export const fetchProjects = ({category,tag}) => {
  const params = {};
  if (category) {
    params.category = category;
  }
  if (tag) {
    params.tag = tag;
  }
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PROJECTS_REQUEST });
    try {
      const response = await api.get("/api/projects",{params});
      console.log("fetch Projects ", response.data);
      dispatch({
        type: actionTypes.FETCH_PROJECTS_SUCCESS,
        projects: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_PROJECTS_FAILURE,
        error: error.message,
      });
    }
  };
};

export const searchProjects = (keyword) => {
  
  return async (dispatch) => {
    dispatch({ type: actionTypes.SEARCH_PROJECT_REQUEST });
    try {
      const response = await api.get(`/api/projects/search?keyword=${keyword}`);
      console.log("search Projects ", response.data);
      dispatch({
        type: actionTypes.SEARCH_PROJECT_SUCCESS,
        projects: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.SEARCH_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};

// Action for creating a project
export const createProject = (projectData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_PROJECT_REQUEST });
    try {
      const response = await api.post(
        `${API_BASE_URL}/api/projects`,
        projectData
      );
      dispatch({
        type: actionTypes.CREATE_PROJECT_SUCCESS,
        project: response.data,
      });
    } catch (error) {
      console.log("catch error ",error)
      dispatch({
        type: actionTypes.CREATE_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};

// Action for updating a project
export const updateProject = ({projectId, updatedData}) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_PROJECT_REQUEST });
    try {
      const response = await api.put(
        `${API_BASE_URL}/api/projects/${projectId}`,
        updatedData
      );
      dispatch({
        type: actionTypes.UPDATE_PROJECT_SUCCESS,
        project: response.data,
      });
    } catch (error) {
        console.log("catch error ",error)
      dispatch({
        type: actionTypes.UPDATE_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchProjectById = (id) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.FETCH_PROJECT_BY_Id_REQUEST });
      try {
        const response = await api.get(`/api/projects/${id}`);
        console.log("fetch Projects by id", response.data);
        dispatch({
          type: actionTypes.FETCH_PROJECT_BY_Id_SUCCESS,
          projectDetails: response.data,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.FETCH_PROJECT_BY_Id_FAILURE,
          error: error.message,
        });
      }
    };
  };

// Action for deleting a project
export const deleteProject = ({projectId}) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_PROJECT_REQUEST });
    try {
      await api.delete(`/api/projects/${projectId}`);
      dispatch({ type: actionTypes.DELETE_PROJECT_SUCCESS, projectId });
    } catch (error) {
      console.log("error - ",error)
      dispatch({
        type: actionTypes.DELETE_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};


export const inviteToProject = ({email, projectId}) => {
  return async dispatch => {
    dispatch({ type: actionTypes.INVITE_TO_PROJECT_REQUEST });
    try {
      const {data}=await api.post('/api/projects/invite', { email, projectId });
      dispatch({ type: actionTypes.INVITE_TO_PROJECT_SUCCESS });
      console.log("invite to project ",data);
    } catch (error) {
      dispatch({ type: actionTypes.INVITE_TO_PROJECT_FAILURE, error: error.message });
    }
  };
};

// Action for accepting invitation
export const acceptInvitation = ({invitationToken,navigate}) => {
  console.log("invitation token",invitationToken)
  return async dispatch => {
    dispatch({ type: actionTypes.ACCEPT_INVITATION_REQUEST });
    try {
      const {data}=await api.get('/api/projects/accept_invitation', {
        params: { token:invitationToken },
      });
      navigate(`/project/${data.projectId}`)
      console.log("accept invitation",data)
      dispatch({ type: actionTypes.ACCEPT_INVITATION_SUCCESS,payload:data });
    } catch (error) {
      console.log("error ",error)
      dispatch({ type: actionTypes.ACCEPT_INVITATION_FAILURE, error: error.message });
    }
  };
};
