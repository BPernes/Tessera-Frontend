import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

// import * as DeputadosRepository from './helpers/DeputadosRepository'

import DeputadosList from './components/DeputadosList'

const SearchScreen = ({navigation}) => {

    return (
        <View>
            <DeputadosList navigation={navigation}/>
        </View>
    )
}

export default SearchScreen;