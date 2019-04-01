import * as types from '../util/types'

function onCameraPending(){
    return {
        type: types.CAMERA_PENDING,
        payload: null
    }
}

function onCameraFulfilled(obj){
    return{
        type: types.CAMERA_FULFILLED,
        payload: obj
    }
}

export async function onCameraFetching(uri){
    return async (dispatch, getState) => {
        dispatch(onCameraPending())
        camera_obj = {
            uri: uri,
            uriLoading: false,
            isError: false
        }
        dispatch(onCameraFulfilled(camera_obj))
    }
}