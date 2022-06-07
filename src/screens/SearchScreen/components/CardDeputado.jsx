import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { List, IconButton, Surface } from 'react-native-paper'

const CardDeputado = ({nome, siglaUf, siglaPartido, urlFoto}) => {
    
    return (
            <View style={styles.listContainer}>
                <List.Item 
                    title={nome}
                    description={`Estado: ${siglaUf} - Partido: ${siglaPartido}`}
                    left={() => <Image source={{uri: urlFoto}} style={styles.deputadoImg}/>}
                    right={() => <IconButton icon='account-details-outline' color='#189AB4' size={35}/>}
                    style={styles.elevation}
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
    },
    listContainer: {
        borderRadius: '3%',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    elevation: {
        elevation: 10,
        shadowColor: '#080808'
    }
})

export default CardDeputado