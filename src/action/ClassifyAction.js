import * as types from '../util/types'
import {HOSTS} from '../util/constants'
import Axios from 'axios'
import FormData from 'form-data'

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
        URL = HOSTS[0]
        result_obj = {
            result: {
                class: 'Loading...'
            },
            resultLoading: false,
            isError: false
        }
        
        const data = new FormData();

        data.append('file', {
            uri: img,
            type: 'image/jpeg',
            name: 'imageName'
        });


        try{
            let resp = await Axios.post(URL, data, {
                headers: {
                  'accept': 'application/json',
                  'Accept-Language': 'en-US,en;q=0.8',
                  'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
            console.log('ACTION_RESULTS_SUCCESS',resp.data)
            result_obj.result = resp.data
        }catch(error){
            console.log('ACTION_RESULTS_ERROR', error)
            result_obj.isError = true
        }

        dispatch(onResultFulfilled(result_obj))
    }
}