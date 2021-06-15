import React from 'react';
import { Text, View } from 'react-native';
import { CONTENT_FONT_SIZE, FONT_FAMILY, STATUS_FONT_SIZE } from "../constants";


export const MessageStatus = (props) => {
    const { status } = props;
    return <View style={{
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        height: CONTENT_FONT_SIZE,
        // marginLeft: amountOfLines === 1 ? 10 : undefined,
        marginTop: -CONTENT_FONT_SIZE,
    }}>


        <Text style={{
            color: 'yellow',
            fontSize: STATUS_FONT_SIZE,
            fontFamily: FONT_FAMILY,
        }}>{status}</Text>
    </View>
}
