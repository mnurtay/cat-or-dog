import * as types from '../util/types'

let initial_state = {
    result: {
        class: 'Loading...'
    },
    resultLoading: false,
    isError: false,
}

export default function ClassifyReducer(state=initial_state, action){
    switch(action.type){
        case types.RESULT_PENDING: {
            return Object.assign({}, state, {
                resultLoading: true,
                isError: false
            })
        }
        case types.RESULT_FULFILLED: {
            return Object.assign({}, state, action.payload, {
                resultLoading: false
            })
        }
    }
    return state
}