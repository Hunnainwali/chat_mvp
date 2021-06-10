import React from 'react';
import {View, Text} from 'react-native';
import {CONTENT_FONT_SIZE, FONT_FAMILY} from "../constants";

export const MessageContent = (props) => {
    const {text} = props;
    return <View>
        <Text
            style={{
                color: 'white',
                fontSize: CONTENT_FONT_SIZE,
                fontFamily: FONT_FAMILY,
            }}
        >
            {text}
        </Text>
    </View>
}
