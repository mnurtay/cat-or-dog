import React, { Component } from 'react'
import {connect} from 'react-redux'
import ClassifyComponent from '../component/ClassifyComponent'
import {onResultFetching} from '../action/ClassifyAction'

class ClassifyContainer extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Cat or Dog'
        }
    }

    getResult = (uri) => {
        this.props._on_result_fetching(uri)
    }

    render(){
        let {uri} = this.props.CameraReducer
        // let {result, resultLoading, isError} = this.props.ClassifyReducer
        // if(uri){
        //     this.getResult(uri)
        // }
        return(
            <ClassifyComponent
                navigation={this.props.navigation}
                pictureUri={uri}
                result={'Cat'}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        ClassifyReducer: state.ClassifyReducer,
        CameraReducer: state.CameraReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _on_result_fetching: async (uri) => {
            await dispatch(await onResultFetching(uri))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassifyContainer)