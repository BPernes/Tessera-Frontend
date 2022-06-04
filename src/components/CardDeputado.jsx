import React from 'react'
import { Image } from 'react-native'
import { List } from 'react-native-paper'

const CardDeputado = ({nome, siglaUf, siglaPartido, urlFoto}) => {
    return (
        <View>
            <List.Item 
                title={nome}
                description={`Estado: ${siglaUf} Sigla do Partido: ${siglaPartido}`}
                left={props => <Image source={urlFoto}/>}
            />
        </View>
    )
}

export default CardDeputado