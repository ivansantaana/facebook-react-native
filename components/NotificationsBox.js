import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Avatar from './Avatar'
import fakeStories from '../data/fakeStories';

const Container= styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    background: #FFFFFF;
`
const ContainerNotif= styled.View`
    width: 100%;
    height: 60px;
    margin-left: -59%;
    margin-top: 25%;
    align-items: center;
    background: #FFFFFF;
`
const IconContainer= styled.View`
    margin-left: 10%;
    margin-top: -5%;
    background: #2098D6;
    border-radius: 20px;
`
const Text = styled.Text`
    color: #000000;
    font-size: 13px;
    font-weight: bold;
    padding-left: 4%;
`
const Date = styled.Text`
    color: #626262;
    font-size: 13px;
    padding-left: 41%;
`
const Sugerencia = styled.Text`
    margin-left: 18%;
    margin-top: -10%;
    color: #000000;
    font-size: 13px;
    padding-left: 40%;
`
const Button = styled.TouchableOpacity`
width: 42px;
height: 42px;
margin-top: -50px;
margin-left: 160%;
align-items: center;
justify-content: center;
`


const NotificationsBox = () => {
    return (
        <Container>
            <Text>Anteriores</Text>
                <ContainerNotif>
                    <Avatar source={require('../assets/12.jpg')} />
                    <Sugerencia>Tienes una sugerencia de amistad nueva: Iván.</Sugerencia>
                    <Date>Ayer a las 13:39</Date>
                    <Button>
                        <MaterialCommunityIcons name='dots-horizontal' size={26} color='black' />
                    </Button>
                    <IconContainer>
                        <MaterialCommunityIcons name='account' size={20} color='white' />
                    </IconContainer>

                </ContainerNotif>
        </Container>
        
    );
}

export default NotificationsBox

/*

{fakeStories.map((story, i) => {
                        return(
                            <UserCard key={i.toString()}>
                                <UserCardStory source={story.source} />
                                <UserCardFooter profile={false}>
                                    <Text profile={false}>{story.name}</Text>
                                </UserCardFooter>
                                <UserOnCard>
                                    <Avatar 
                                        source={story.user}
                                        story={true}
                                        checked={story.checked}
                                    />
                                </UserOnCard>
                            </UserCard>
                        )

*/