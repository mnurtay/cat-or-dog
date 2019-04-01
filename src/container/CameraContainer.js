import React, { Component } from 'react'
import CameraComponent from '../component/CameraComponent'
import {onCameraFetching} from '../action/CameraAction'
import {connect} from 'react-redux'

class CameraContainer extends Component{
    static navigationOptions = {
        header: null
    }

    _setPicture = (uri) => {
        this.props._on_camera_fetching(uri)
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer)