import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import { MAIN_COLOR_2 } from '../util/constants'
import ImageHandler from './ImageHandler'

const w = Dimensions.get('window').width

export default class ClassifyComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let {navigation, pictureUri, result, resultLoading} = this.props
        let image = null
        if(pictureUri){
            image = (
                <View>
                    <View style={styles.imgView}>
                        <ImageHandler url={pictureUri} ratio={0.9}/>
                    </View>
                    <View style={styles.resultView}>
                        {
                            resultLoading
                            ?
                            <Text style={styles.text}>Loading...</Text>
                            :
                            <Text style={styles.text}>Result: {result.class}, accuracy: {result.accuracy}</Text>
                        }
                    </View>
                </View>
            )
        }
        return(
            <View style={styles.root}>
                { image!=null ? image:null }
                <View style={styles.btnView}>
                    <Button
                        title={'Open camera'}
                        buttonStyle={styles.btnStyle}
                        titleStyle={{ fontFamily:'sf-regular', fontSize:15, color:'white' }}
                        onPress={()=>navigation.navigate('Camera')}
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
        fontSize: 18
    },
    btnView: {
        width: w*.7,
        marginTop: 10,
        borderRadius: 10
    },
    btnStyle: {
        backgroundColor: MAIN_COLOR_2,
        paddingVertical: 10
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    resultView: {
        width: w*.85,
        marginTop: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})