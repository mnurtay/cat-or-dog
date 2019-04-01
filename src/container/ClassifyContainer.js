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

    render(){
        return(
            <ClassifyComponent navigation={this.props.navigation}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        ClassifyReducer: state.ClassifyReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _on_result_fetching: async () => {
            await dispatch(await onResultFetching())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassifyContainer)