import api from '../appwrite/appwrite'
import {
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_RESET,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,

} from '../constants/reduxConstants';

export const createPost = (file, title, createdBy) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const data = await api.createFile(file);
    const dbRecord = await api.createDocument({ "Create_date": data.dateCreated, "Title": title, "POSTName": data.name, "POSTID": data.$id, "CreatedBy": createdBy }, ['role:all'], [`${data.$write[0]}`]);
    console.log("Return dbRecord fromdatabase******", dbRecord)

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: dbRecord,
    });

    console.log("payload when dispatch POST_create_success***", data)
  } catch (error) {
    const message =
      error.response && error.response.message
        ? error.response.message
        : error.message
    if (message === 'Not authorized') {
      dispatch(logout())
    }
    dispatch({
      type: POST_CREATE_FAIL,
      payload: message,
    });
  }
}
export const listPosts = () => async (
  dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });

    const data = await api.listDocuments();
    console.log("Return POSTList fromdatabase******", data.documents.reverse())

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data.documents,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized') {
      dispatch(logout())
    }
    dispatch({
      type: POST_LIST_FAIL,
      payload: message,
    });
  }
}

export const viewPost = async (id) => {
  return await api.getPostView(id);

}