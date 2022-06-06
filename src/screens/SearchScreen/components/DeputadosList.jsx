import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'

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

    console.log(deputadosList[0]?.nome)

    // const renderDeputados = ({ item }) => 
    //     <View>
    //         <CardDeputado 
    //             nome = {item[0].nome}
    //             siglaUf = {item[0].siglaUf}
    //             siglaPartido = {item[0].siglaPartido}
    //             urlFoto = {item[0].urlFoto}
    //         />
    //     </View>
    

    return (
        <View>
            <FlatList>
                data={deputadosList}
                renderItem={ ({item}) => 
                    <View>
                        <CardDeputado 
                            nome = {item[0]?.nome}
                            siglaUf = {item[0]?.siglaUf}
                            siglaPartido = {item[0]?.siglaPartido}
                            urlFoto = {item[0]?.urlFoto}
                        />
                    </View>
                }
                keyExtractor={(deputado) => deputado[0]?.id}
                extraData={deputadosList}
            </FlatList>
        </View>
    )

}

export default DeputadosList