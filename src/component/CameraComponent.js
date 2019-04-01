import React, { Component } from 'react'
import { StyleSheet, View, Modal, TouchableOpacity, Text, Dimensions } from 'react-native'
import { Camera, Permissions } from 'expo'
import {} from '../util/constants'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

export default class CameraComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
        }
    }

    async componentDidMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ hasCameraPermission: status==='granted' })
    }

    takePicture = async() => {
        let photo = null
        if (this.camera){
            photo = await this.camera.takePictureAsync()
        }
        this.props.setPicture(photo.uri)
        this.props.navigation.goBack()
    }

    render(){
        let {navigation} = this.props
        let { hasCameraPermission } = this.state
        if(hasCameraPermission === null){
            <View/>
        }

        if(hasCameraPermission === false){
            return(
                <View style={styles.errorView}>
                    <Text style={styles.text}>No access to camera</Text>
                </View>
            )
        }
        return(
            <View style={styles.root}>
                <View style={styles.cameraView}>
                    <Camera
                        style={{flex:1}}
                        type={this.state.type}
                        autoFocus={'on'}
                        ratio={'4:3'}
                        ref={ref=>{this.camera=ref;}}
                    />
                </View>
                <View style={styles.panel}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        {/* --- Flip camera --- */}
                        <View style={styles.box} >
                            <Text
                                style={styles.panelText}
                                onPress={()=>{
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back,
                                    })
                                }}> Flip </Text>
                        </View>
                        {/* --- Take Picture --- */}
                        <View style={styles.box}>
                            <View style={styles.borderCircle}>
                                <TouchableOpacity
                                    style={styles.btnCircle}
                                    onPress={()=>this.takePicture()}
                                />
                            </View>
                        </View>
                        {/* --- Go Back --- */}
                        <View style={styles.box}>
                            <Text 
                                style={styles.panelText}
                                onPress={()=>navigation.goBack()}>Go Back</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    text: {
        fontFamily: 'sf-regular',
        fontSize: 18
    },
    errorView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraView: {
        width: w,
        height: h*.75
    },
    panel: {
        width: w,
        height: h*.25,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: w/3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    panelText: {
        fontFamily: 'sf-regular',
        fontSize: 15,
        color: 'white'
    },
    borderCircle: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderRadius: 70,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnCircle: {
        width: 65,
        height: 65,
        borderRadius: 65,
        backgroundColor: 'white'
    }
})