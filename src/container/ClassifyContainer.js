import React, { Component } from 'react'
import {connect} from 'react-redux'
import ClassifyComponent from '../component/ClassifyComponent'
import HolderComponent from '../component/HolderComponent'
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
        let {uri, uriLoading} = this.props.CameraReducer
        let {resultLoading} = this.props.ClassifyReducer
        return(
            <HolderComponent 
            isLoading = {resultLoading || uriLoading}
            >
                <ClassifyComponent
                    navigation={this.props.navigation}
                    pictureUri={uri}
                    result={'Cat'}
                />
            </HolderComponent>
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