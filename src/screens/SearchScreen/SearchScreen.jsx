import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

// import * as DeputadosRepository from './helpers/DeputadosRepository'

import DeputadosList from './components/DeputadosList'

const SearchScreen = () => {

    // useEffect(() => {
    //     loadStorage()
    //     // getStorageData()
    // }, [])

    // const loadStorage = async () => {
    //     try {
    //         const data = await DeputadosApi.getAll()
    //         data !== null ? 
    //         setDeputadosList(dados) 
    //         : 
    //         console.log(`Sem dados`);

    //         // await DeputadosRepository.add(data)
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // }

    // const getStorageData = async () => {
    //     try {
    //         const deputados = await DeputadosRepository.getAll()
    //         setDeputadosList(deputados)
    //         console.log(`Deputados vindos do storage ${deputados}`);

    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    // }

    return (
        <View>
            <DeputadosList/>
        </View>
    )
}

export default SearchScreen;