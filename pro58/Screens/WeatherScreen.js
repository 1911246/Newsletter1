import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Weather extends React.Component{
  render(){
    return(
      <View>
        <Text style={styles.text}> Weather ></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


export default Weather