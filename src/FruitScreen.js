import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import FruitComponent from './components/FruitComponent'

export default class FruitScreen extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <View style={{marginLeft:20}}>
                <FlatList
                    data={fruits}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <FruitComponent
                            title={item.title}
                            imageURL={item.imageURL}
                            navigation={this.props.navigation} />
                    }}
                />
            </View>
        )
    }
}

const fruits = [{ title: 'Apple', imageURL: require('../assets/Images/Apple.jpg') },
{ title: 'Mango', imageURL: require('../assets/Images/Mango.jpg') },
{ title: 'Grapes', imageURL: require('../assets/Images/Grapes.jpg') },
{ title: 'Orange', imageURL: require('../assets/Images/Orange.jpg') },
{ title: 'Papaya', imageURL: require('../assets/Images/Papaya.jpg') },
{ title: 'Watermelon', imageURL: require('../assets/Images/Watermelon.jpg') }
]