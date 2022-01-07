import React from 'react';
import styled from 'styled-components/native';

import NotificationsBar from '../components/NotificationsBar'
import NotificationsBox from '../components/NotificationsBox'
const View = styled.View`
    flex: 1;
    background: #FFFFFF;
`
const Notifications = () => {
    return (
        <View>
            <NotificationsBar />
            <NotificationsBox />

        </View>
    )
}

export default Notifications