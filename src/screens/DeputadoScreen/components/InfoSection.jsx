import React from 'react'
import { Text, Surface } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

const InfoSection = ({nome, siglaPartido, siglaUf, email}) => {

    return (
        <Surface style={styles.surface}>
            <View style={styles.innerContainer} >
                <Text style={styles.mainText} > Nome: </Text>
                <Text> { nome }</Text>
            </View>

            <View style={styles.innerContainer} >
                <Text style={styles.mainText} > Partido: </Text>
                <Text> { siglaPartido }</Text>
            </View>

            <View style={styles.innerContainer} >
                <Text style={styles.mainText} > Estado: </Text>
                <Text> { siglaUf }</Text>
            </View>

            <View style={styles.innerContainer} >
                <Text style={styles.mainText} > Email: </Text>
                <Text> { email }</Text>
            </View>
        </Surface>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontWeight: 'bold'
    },
    surface: {
        width: 300,
        height: 230,
        borderRadius: '5%',
        elevation: 4,
    },
    innerContainer: {
        margin: 10,
        flex: 1,
        flexDirection: 'row'
    }
})

export default InfoSection