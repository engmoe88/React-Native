import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Adding my custom text tag to my very first react native app. The logo below is just a placeholder from google cdn to display something in the image tag. Mohammed</Text>
        <Image source={{uri: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"}} style={{width: 200, height: 200}}>

        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42eef4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mytext: {
    backgroundColor: '#fff',
    padding: '50px',
  },
});

