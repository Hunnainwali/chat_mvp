import React from 'react';
import {
  StyleSheet,
    FlatList
} from 'react-native';
import {messages} from "./messages";
import {Message} from "./components/Message";
import {CONTAINER_PADDING} from "./constants";

const App = () => {
  return <FlatList
      data={messages}
      renderItem={renderItem}
      style={styles.container}
  />
};

const renderItem = ({item, index}) => {
  return <Message {...item} key={index}/>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#201F24',
    padding: CONTAINER_PADDING,
  }
});

export default App;
