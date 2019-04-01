import React from 'react'
import { Image, Dimensions, View, StyleSheet, Text } from 'react-native'


const DEVICE_WIDTH = Dimensions.get('window').width

class ImageHandler extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            height: 750,
            width: 600,
            isFail: false
        }
    }
    componentDidMount(){
        Image.getSize(this.props.url, (width, height) => { this.setState({
            isLoading: false,
            height: height,
            width: width,
            isFail: false
        })}, (error)=>{
            this.setState({isFail: true, isLoading: false})
        });
    }
    render(){
        let {height, width, isFail, isLoading} = this.state
        let source = null
        let ratio_props = 0.4
        
        //If it is not loading and not fail
        if(!isFail && !isLoading){
            ratio_props = this.props.ratio
            source = {uri: this.props.url}
        }
        let ratio = (DEVICE_WIDTH * ratio_props )/width;
        return(
            <View style={styles.holder}>
                {
                    isLoading?
                    <Text style={styles.loadingText}>Loading...</Text>
                    :
                    <Image 
                    resizeMode='cover'
                    style = {{ width: ratio*width,height: ratio*height, borderRadius: 4}}
                    source={source}
                    >
                        {this.props.children}
                    </Image>
                }
            </View>
        )
    }
}
export default ImageHandler;

const styles = StyleSheet.create({
    holder:{
        justifyContent:'center',
        alignItems:'center',
    },
    loadingText:{
        margin: 50,
        fontSize: 18,
        
    }
})