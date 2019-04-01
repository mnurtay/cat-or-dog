import React, { Component } from 'react'
import CameraComponent from '../component/CameraComponent'
import {onCameraFetching} from '../action/CameraAction'
import {onResultFetching} from '../action/ClassifyAction'
import {connect} from 'react-redux'

class CameraContainer extends Component{
    static navigationOptions = {
        header: null
    }

    _setPicture = async (uri) => {
        this.props._on_camera_fetching(uri)
        this.props._on_result_fetching(uri)
    }

    render(){
        return(
            <CameraComponent 
                navigation={this.props.navigation}
                setPicture={this._setPicture}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        CameraReducer: state.CameraReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _on_camera_fetching: async (uri) => {
            await dispatch(await onCameraFetching(uri))
        },
        _on_result_fetching: async (uri) => {
            await dispatch(await onResultFetching(uri))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer)