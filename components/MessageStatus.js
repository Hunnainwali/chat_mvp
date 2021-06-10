import React from 'react';
import {View, Text} from 'react-native';
import {CONTENT_FONT_SIZE, FONT_FAMILY, STATUS_FONT_SIZE} from "../constants";


export const MessageStatus = (props) => {
    const {status, shouldMoveStatusHigher, amountOfLines} = props;
    return <View style={{
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        marginLeft: amountOfLines === 1 ? 10 : undefined,
        marginTop: shouldMoveStatusHigher ? -CONTENT_FONT_SIZE : undefined,
    }}>
        <Text style={{
            color: 'yellow',
            fontSize: STATUS_FONT_SIZE,
            fontFamily: FONT_FAMILY,
        }}>{status}</Text>
    </View>
}
