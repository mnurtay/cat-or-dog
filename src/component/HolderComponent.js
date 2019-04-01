import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import {MAIN_COLOR_3, MAIN_BACKGROUND} from '../util/constants'

class Holder extends Component {
    render(){
        return(
            <View style={styles.holder}>
                {
                    this.props.isLoading
                    ? <View style={styles.innerHolder}>
                        <ActivityIndicator size='large' color={MAIN_COLOR_3}/>
                    </View>
                    : this.props.children
                }
            </View>
        )
    }
}

Holder.defaultProps = {
    isLoading: false
}

export default Holder;

const styles = StyleSheet.create({
    holder: {
        flex: 1
    },
    innerHolder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MAIN_BACKGROUND
    }
})