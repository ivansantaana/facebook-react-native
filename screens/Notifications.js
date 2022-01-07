import React from 'react';
import styled from 'styled-components/native';

import NotificationsBar from '../components/NotificationsBar'

const View = styled.View`
    flex: 1;
    background: #FFFFFF;
`
const Notifications = () => {
    return (
        <View>
            <NotificationsBar />
        </View>
    )
}

export default Notifications