import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'

import CardDeputado from './CardDeputado'


const DeputadosList = () => {
    const [deputadosList, setDeputadosList] = useState([])
    
    useEffect (() => {
        fetch('http://localhost:3000/api/deputados')
            .then((res) => res.json())
            .then((json) => setDeputadosList(json))
            .catch((err) => console.log(err))
    }, [])


    const renderDeputados = ({item}) => {
        <CardDeputado 
            nome = {item.nome}
            siglaUf = {item.siglaUf}
            siglaPartido = {item.siglaPartido}
            urlFoto = {item.urlFoto}
        />
    }

    return (
        <View>
            <FlatList>
                data={deputadosList}
                renderItem={renderDeputados}
                keyExtractor={(deputado) => deputado.id}
            </FlatList>
        </View>
    )

}

export default DeputadosList