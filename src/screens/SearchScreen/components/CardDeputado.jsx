import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { List, IconButton } from 'react-native-paper'

const CardDeputado = ({nome, siglaUf, siglaPartido, urlFoto}) => {
    
    return (
        <View>
            <List.Item 
                title={nome}
                description={`Estado: ${siglaUf} - Partido: ${siglaPartido}`}
                left={() => <Image source={{uri: urlFoto}} style={styles.deputadoImg}/>}
                right={() => <IconButton icon='account-details-outline' color='#189AB4' size={35}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    deputadoImg: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        border: 'solid #189AB4'
    },
    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default CardDeputado