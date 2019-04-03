import React, { Component } from 'react'
import {connect} from 'react-redux'
import ClassifyComponent from '../component/ClassifyComponent'
import {onResultFetching} from '../action/ClassifyAction'

class ClassifyContainer extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Classification'
        }
    }

    getResult = (uri) => {
        this.props._on_result_fetching(uri)
    }

    render(){
        let {uri} = this.props.CameraReducer
        let { resultLoading, result} = this.props.ClassifyReducer
        return(
            <ClassifyComponent
                navigation={this.props.navigation}
                pictureUri={uri}
                resultLoading = {resultLoading}
                result={result}
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