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
            type: Camera.Constants.Type.back
        }
    }

    async componentDidMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ hasCameraPermission: status==='granted' })
    }

    render(){
        let {navigtion} = this.props
        let { hasCameraPermission } = this.state
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
                    />
                </View>
                <View style={styles.panel}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        
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
    }
})