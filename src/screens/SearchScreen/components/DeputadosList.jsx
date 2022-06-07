import React, { useEffect, useState } from 'react'
import { View, FlatList, Text } from 'react-native'

import { Divider } from 'react-native-paper'

import CardDeputado from './CardDeputado'
import * as DeputadosAPI from '../../../helpers/DeputadosAPI'


const DeputadosList = () => {
    const [deputadosList, setDeputadosList] = useState([])
    
    useEffect (() => {
        loadDeputados();
    }, [])

    const loadDeputados = async () => {
        const dados = await DeputadosAPI.getAll()

        if(dados !== null) {
            setDeputadosList(dados)
        }
        else {
            console.log('Dados retornaram nulo!!')
        }
    }

    return (
        <View>
            <FlatList
                data={deputadosList}
                renderItem={ ({item}) => 
                    <View>
                        <CardDeputado 
                            nome = {item.nome}
                            siglaUf = {item.siglaUf}
                            siglaPartido = {item.siglaPartido}
                            urlFoto = {item.urlFoto}
                        />
                    </View>
                }
                keyExtractor={(deputado) => deputado.id}
                extraData={deputadosList}
                ItemSeparatorComponent={Divider}
            />
        </View>
    )

}

export default DeputadosList