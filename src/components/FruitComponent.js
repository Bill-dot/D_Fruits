import React, { useState } from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import LargeScreen from './LargeScreen'

const FruitComponents = ({ title, imageURL, navigation }) => {

    const [state, setState] = useState({ height: 200, width: 200, borderRadius: 10 })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LargeImage', { id: imageURL })}
            // onPressOut={()=>{setState({height:200, width:200})}}
            >
                <Image source={imageURL} style={state} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 25,
        marginTop: 15,
        fontWeight: 'bold',
        marginBottom: 10

    },
    container:{
        flex:1
    }

})

export default FruitComponents;