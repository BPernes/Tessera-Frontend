import React from 'react'
import { StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

const SectionCard = ({title, content, coverUrl}) => (
    <Card> 
        <Card.Cover source={coverUrl}/>
    </Card>
)

const styles = StyleSheet.create({
    customButton: {
        width: 80,
        height: 80
    }
})

export default SectionCard 