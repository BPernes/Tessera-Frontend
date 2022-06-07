import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Headline } from 'react-native-paper'

const DeputadosHeader = ({nome, urlFoto}) => (
    <View>
        <Headline style={styles.nome}>
            {nome}
        </Headline>
        <Avatar.Image 
            size={250}
            source={{uri: urlFoto}}
        />
    </View>
        
)

const styles = StyleSheet.create({
    nome: {
        textAlign: 'center'
    }
})

export default DeputadosHeader