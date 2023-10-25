import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import RNKommunicateChat from 'react-native-kommunicate-chat';
import CustomFAB from './pages/components/CustomFAB';

const App = () => {
  startConversation = () => {
    let conversationObject = {
      appId: '204a500d71b2f3e25a7ee7ec2a6cb6ada',
    };
    RNKommunicateChat.buildConversation(
      conversationObject,
      (response, responseMessage) => {
        if (response == 'Success') {
          console.log('Conversation Successfully with id:' + responseMessage);
        }
      },
    );
  };
  return (
    <SafeAreaView style={styles.parentContainer}>
      <ImageBackground
        source={require('./pages/assets/images/bg.png')}
        style={styles.childContainer}>
        <View style={styles.textContainer}>
          <Text style={{color: '#fff'}}>CHATBOT IN REACT NATIVE </Text>
          <Text style={{color: '#fff'}}>
            Have you talked with our customer support?{' '}
          </Text>
        </View>
        <View style={styles.chatContainer}>
          <View style={styles.chatIconContainer}>
            <CustomFAB onPress={() => startConversation()} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  parentContainer: {flex: 1},
  childContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textContainer: {
    flex: 0.8,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContainer: {flex: 0.2},
  chatIconContainer: {flex: 1, position: 'relative'},
});
