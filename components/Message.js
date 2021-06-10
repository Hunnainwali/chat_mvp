import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MessageContent} from "./MessageContent";
import {MessageStatus} from "./MessageStatus";
import TextSize from 'react-native-text-size';
import {BUBBLE_PADDING, CONTENT_FONT_SIZE, FONT_FAMILY, WIDTH, STATUS_FONT_SIZE} from "../constants";


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
    componentDidMount() {
        this.measureMessageSizes();
    }


    render() {
        const {text, status} = this.props;
        const {amountOfLines} = this.state;

        if (!this.shouldRenderMessage()) {
            return null;
        }


        return <View style={this.getContainerStyles()}>
            <MessageContent
                text={text}
            />
            <MessageStatus
                status={status}
                shouldMoveStatusHigher={this.shouldMoveStatusHigher()}
                amountOfLines={amountOfLines}
            />
        </View>
    }

    shouldRenderMessage = () => {
        const {amountOfLines, freeSpaceOnLastLine} = this.state;

        // Render message only when all needed states were measured
        return ![amountOfLines, freeSpaceOnLastLine].includes(undefined);
    }

    measureMessageSizes = async () => {
        const textMeasurePromise = TextSize.measure({
            text: this.props.text,
            usePreciseWidth: true,
            width: WIDTH,
            fontSize: CONTENT_FONT_SIZE,
            fontFamily: FONT_FAMILY,
        });
        const statusMeasurePromise = TextSize.measure({
            text: this.props.status,
            fontSize: STATUS_FONT_SIZE,
            fontFamily: FONT_FAMILY,
        });
        return Promise.all([textMeasurePromise, statusMeasurePromise])
            .then(([textMeasure, statusMeasure]) => {
                this.setState({
                    freeSpaceOnLastLine: textMeasure.width - textMeasure.lastLineWidth,
                    longestLineWidth: textMeasure.width,
                    amountOfLines: textMeasure.lineCount,
                    statusViewWidth: statusMeasure.width,
                });
            });
    }

    getContainerStyles = () => {
        const {wasSentByMe} = this.props;

        // Add default chat bubble styles
        const containerStyles = [styles.chatBubble];

        // Add different styles depend on a sender
        if (wasSentByMe) {
            containerStyles.push(styles.userMessage);
        } else {
            containerStyles.push(styles.partnerMessage);
        }

        // Add proper flexDirection value
        containerStyles.push({flexDirection: this.getFlexDirection()})

        return containerStyles;
    }

    getFlexDirection = () => {
        const {amountOfLines} = this.state;
        if (amountOfLines && amountOfLines > 1) {
            return 'column';
        } else if (this.state.amountOfLines === 1) {
            return this.doesStatusHaveEnoughSpace() ? 'row' : 'column';
        } else {
            return 'row';
        }
    }

    doesStatusHaveEnoughSpace = () => {
        const {amountOfLines, longestLineWidth, statusViewWidth} = this.state;
        if (longestLineWidth === undefined || statusViewWidth === undefined || amountOfLines !== 1) {
            return false;
        }
        // Calculate real message width and see will status fit or not
        return longestLineWidth + statusViewWidth <= WIDTH;
    };

    shouldMoveStatusHigher = () => {
        if (this.state.amountOfLines > 1) {
            return this.state.statusViewWidth <= this.state.freeSpaceOnLastLine;
        } else {
            return false;
        }
    };
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
