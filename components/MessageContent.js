import React from 'react';
import { View, Text, Platform } from 'react-native';
import { CONTENT_FONT_SIZE, FONT_FAMILY, STATUS_FONT_SIZE } from "../constants";

export const MessageContent = (props) => {
    const { text, status } = props;
    return <View>
        <Text
            style={{
                color: 'white',
                fontSize: CONTENT_FONT_SIZE,
                fontFamily: FONT_FAMILY,
            }}
        >
            {text}

            <Text style={{
                color: 'transparent',
                fontSize: STATUS_FONT_SIZE,
                fontFamily: FONT_FAMILY,
                letterSpacing: 0,
                alignSelf: 'flex-end'

            }}>{Platform.OS === "android"?"     oiuoiuo":"\t" + status}</Text>
        </Text>
    </View>
}
