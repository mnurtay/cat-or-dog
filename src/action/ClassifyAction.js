import * as types from '../util/types'
import {HOSTS} from '../util/constants'
import Axios from 'axios'

function onResultPending(){
    return {
        type: types.RESULT_PENDING,
        payload: null
    }
}

function onResultFulfilled(obj){
    return{
        type: types.RESULT_FULFILLED,
        payload: obj
    }
}

export async function onResultFetching(img){
    return async (dispatch) => {
        dispatch(onResultPending())
        URL = HOSTS[0] + 'classify/'
        result_obj = {
            result: null,
            resultLoading: false,
            isError: false
        }
        try{
            let resp = await Axios.post(URL)
            console.log('ACTION_RESULTS_SUCCESS',resp.data)
            result_obj.result = resp.data
        }catch(error){
            console.log('ACTION_RESULTS_ERROR', error)
            result_obj.isError = true
        }

        dispatch(onResultFulfilled({result: null}))
    }
}