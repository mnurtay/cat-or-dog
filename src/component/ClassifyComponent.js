import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import { MAIN_COLOR_2 } from '../util/constants'
import CameraComponent from './CameraComponent'

const w = Dimensions.get('window').width

export default class ClassifyComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            modalVisible: false
        }
    }

    _closeModal = () =>{
        this.setState({ modalVisible:false })
    }

    render(){
        return(
            <View style={styles.root}>
                <View style={styles.btnView}>
                    <Button
                        title={'Open camera'}
                        buttonStyle={styles.btnStyle}
                        titleStyle={{ fontFamily:'sf-regular', fontSize:15, color:'white' }}
                        onPress={()=>this.setState({ modalVisible:true })}
                    />
                    <CameraComponent
                        isVisible={this.state.modalVisible}
                        closeModal={this._closeModal}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'sf-regular',
        fontSize: 16
    },
    btnView: {
        width: w*.7,
        marginTop: 20,
        borderRadius: 10
    },
    btnStyle: {
        backgroundColor: MAIN_COLOR_2,
        paddingVertical: 10
    }
})