import React from 'react'
import {Text, View, StyleSheet, Button,Image} from 'react-native'

const LargeScreen =({navigation})=>{

    const imageURL=navigation.getParam('id')
    console.log(imageURL)
    return(
        <View>
            <Image source={imageURL} style={{ height: 400, width: 400 , marginVertical:120, alignItems:'center', justifyContent:'center'}}/>
        </View>
    )
}

const styles=StyleSheet.create({
    constainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }


})

export default LargeScreen;