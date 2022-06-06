import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

const SectionCard = ({text}) => (
    <Button mode='outlined' style={styles.customButton}>
        {text}
    </Button>
)

const styles = StyleSheet.create({
    customButton: {
        width: 80,
        height: 80
    }
})

export default SectionCard 