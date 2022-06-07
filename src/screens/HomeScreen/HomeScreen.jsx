import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Subheading } from 'react-native-paper'

// import SectionCard from './components/SectionCard'

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <Image 
                source={require('./assets/logo.png')} 
                style={styles.img}
            />
            <Subheading style={styles.subtitle}>
                Transparência de dados!
            </Subheading>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center'
    },
    img: {
        width: 300,
        height: 150
    },
    subtitle: {
        color: '#cfcfcf'
    }
})

export default HomeScreen

