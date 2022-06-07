import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Subheading } from 'react-native-paper'

import SectionCard from './components/SectionCard'

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Image 
                source={require('./assets/logo.png')} 
                style={styles.img}
            />
            <Subheading style={styles.subtitle}>
                Transparência de dados!
            </Subheading>
            <View style={styles.sectionContainer}>
                <SectionCard
                    title='Deputados'
                    firstLine='Listagem e busca de deputados'
                    secondLine='segundo critério'
                    coverUrl={require('./assets/deputados.jpg')}
                    buttonText='Mais Detalhes'
                    navigation={navigation}
                />
                <SectionCard
                    title='Orgãos'
                    firstLine='Lista de comissões e'
                    secondLine='outros orgão legislativos'
                    coverUrl={require('./assets/orgaos.jpg')}
                    buttonText='Mais Detalhes'
                    navigation={navigation}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    img: {
        width: 350,
        height: 150
    },
    subtitle: {
        color: '#cfcfcf',
        marginBottom: 30
    },
    sectionContainer: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },

})

export default HomeScreen

