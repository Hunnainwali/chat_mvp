import {Dimensions, Platform} from "react-native";

export const CONTAINER_PADDING = 10;
export const BUBBLE_PADDING = 10;
export const FONT_FAMILY = Platform.OS === 'ios' ? 'System' : 'Roboto';
export const STATUS_FONT_SIZE = 12;
export const CONTENT_FONT_SIZE = 16;

// Measure max width via subtracting paddings and margins from screen's width
export const WIDTH = Dimensions.get('window').width - BUBBLE_PADDING - CONTAINER_PADDING * 2;
