import * as types from '../util/types'

let initial_state = {
    uri: null,
    uriLoading: false,
    isError: false,
}

export default function CameraReducer(state=initial_state, action){
    switch(action.type){
        case types.CAMERA_PENDING: {
            return Object.assign({}, state, {
                uriLoading: true,
                isError: false
            })
        }
        case types.CAMERA_FULFILLED: {
            return Object.assign({}, state, action.payload, {
                uriLoading: false
            })
        }
    }
    return state
}