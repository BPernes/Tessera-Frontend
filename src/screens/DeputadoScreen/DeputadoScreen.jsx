import React from 'react'

import { View, StyleSheet } from 'react-native'

import DeputadosHeader from './components/DeputadoHeader'
import InfoSection from './components/InfoSection'

const DeputadoScreen = ({navigation, route}) => {

    const {nome, urlFoto, siglaPartido, siglaUf, email } = route.params

    return (
        <View style={styles.mainContainer}>
            <DeputadosHeader
                nome={nome}
                urlFoto={urlFoto}
            />
            <InfoSection 
                nome={nome}
                siglaPartido={siglaPartido}
                siglaUf={siglaUf}
                email={email}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

export default DeputadoScreen