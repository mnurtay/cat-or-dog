import React, { Component } from 'react'
import CameraComponent from '../component/CameraComponent'

export default class CameraContainer extends Component{
    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <CameraComponent navigation={this.props.navigation}/>
        )
    }
}