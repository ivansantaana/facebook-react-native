import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Container= styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    background: #FFFFFF;
`
const Text = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    padding-left: 6px;
`
const Button = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    margin-left: 53%;
    background: #EEEEEE;
    align-items: center;
    justify-content: center;
`

const Notifications = () => {
    return (
        <Container>
            <Text>Notificaciones</Text>
            <Button>
                <MaterialCommunityIcons name='magnify' size={26} color='black' />
            </Button>

        </Container>
    );
}

export default Notifications