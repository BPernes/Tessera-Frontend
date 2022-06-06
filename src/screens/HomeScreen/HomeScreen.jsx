import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import SectionCard from './components/SectionCard'

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <SectionCard text='Deputados'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
})

export default HomeScreen

