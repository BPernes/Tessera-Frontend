import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Subheading, Caption, Button } from 'react-native-paper'

const SectionCard = ({title, firstLine, secondLine, coverUrl, buttonText, navigation}) => (
    <Card mode = 'elevated'> 
        <Card.Cover 
            style = {styles.cardImg} 
            source = {coverUrl}/>
        <Card.Content>
            <Subheading> {title} </Subheading>
            <Caption> {firstLine} </Caption>
            <Caption> {secondLine} </Caption>
        </Card.Content>
        <Card.Actions>
            <Button
                uppercase = {true}
                color = '#189AB4'
                mode = 'text'
                onPress = {() => navigation.navigate('listaDeputados')}
            > 
                {buttonText} 
            </Button>
        </Card.Actions>
    </Card>
)

const styles = StyleSheet.create({
    customButton: {
        width: 80,
        height: 80
    },
    cardImg: {
        width: 250,
        height: 150,

    }
})

export default SectionCard 