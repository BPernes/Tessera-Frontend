import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'

import { Divider } from 'react-native-paper'

import CardDeputado from './CardDeputado'
import * as DeputadosAPI from '../../../helpers/DeputadosAPI'


const DeputadosList = ({navigation}) => {
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
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('deputado', {...item})}
                    >
                        <CardDeputado 
                            nome = {item.nome}
                            siglaUf = {item.siglaUf}
                            siglaPartido = {item.siglaPartido}
                            urlFoto = {item.urlFoto}
                        />
                    </TouchableOpacity>
                }
                keyExtractor={(deputado) => deputado.id}
                extraData={deputadosList}
                ItemSeparatorComponent={Divider}
            />
        </View>
    )

}

export default DeputadosList