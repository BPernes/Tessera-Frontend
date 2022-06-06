import React from 'react'
import { Image, View } from 'react-native'
import { List } from 'react-native-paper'

const CardDeputado = ({nome, siglaUf, siglaPartido, urlFoto}) => {
    
    console.log(`Props Nome: ${nome}!!`)
    console.log(`Props Nome: ${siglaUf}!!`)
    console.log(`Props Nome: ${siglaPartido}!!`)
    console.log(`Props Nome: ${urlFoto}!!`)

    return (
        <View>
            <List.Item 
                title={nome}
                description={`Estado: ${siglaUf} Sigla do Partido: ${siglaPartido}`}
                left={() => <Image source={urlFoto}/>}
            />
        </View>
    )
}

export default CardDeputado