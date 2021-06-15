import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BUBBLE_PADDING } from "../constants";
import { MessageContent } from "./MessageContent";
import { MessageStatus } from "./MessageStatus";


export class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfLines: undefined,
            freeSpaceOnLastLine: undefined,
            longestLineWidth: undefined,
            statusViewWidth: undefined,
        }
    }

    render() {
        const { text, status } = this.props;


        return <View style={[{ "borderColor": "#201F24", "borderRadius": 7, "justifyContent": "center", "marginVertical": 5, "padding": 10 }, this.props.wasSentByMe ? { "alignSelf": "flex-end", "backgroundColor": "#5E76CC" } : { "alignSelf": "flex-start", "backgroundColor": "#2C2B30" }, { "flexDirection": "column" }]}>
            <MessageContent
                text={text}
                status={status}
            />

            <MessageStatus
                status={status}
            />
        </View>
    }
}


const styles = StyleSheet.create({
    chatBubble: {
        justifyContent: 'center',
        borderColor: '#201F24',
        borderRadius: 7,
        padding: BUBBLE_PADDING,
        marginVertical: 5,
    },
    userMessage: {
        backgroundColor: '#5E76CC',
        alignSelf: 'flex-end',
    },
    partnerMessage: {
        backgroundColor: '#2C2B30',
        alignSelf: 'flex-start',
    },
});
