import React, { Component } from 'react'
import { StyleSheet, View, Modal, TouchableOpacity, Text } from 'react-native'
import { Camera, Permissions } from 'expo'
import {} from '../util/constants'

export default class CameraComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back
        }
    }

    async componentDidMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ hasCameraPermission: status==='granted' })
    }

    render(){
        let {isVisible, closeModal} = this.props
        let { hasCameraPermission } = this.state
        if(hasCameraPermission === false){
            return(
                <Modal
                visible={isVisible}
                onRequestClose={()=>closeModal()}
                animationType={'slide'}>
                    <View style={styles.errorView}>
                        <Text style={styles.text}>No access to camera</Text>
                    </View>
                </Modal>
            )
        }
        return(
            <Modal
            visible={isVisible}
            onRequestClose={()=>closeModal()}
            animationType={'slide'}>
                <View></View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'sf-regular',
        fontSize: 18
    },
    errorView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})