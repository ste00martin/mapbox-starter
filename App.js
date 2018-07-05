import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken("pk.eyJ1Ijoicnlhbmxpc3pld3NraSIsImEiOiJjamo5MHQ3bzEwYWtwM3BsaDJuNGZubXYxIn0.lk66Ohmpd3j8s945fi01jA")

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[-122.4194, 37.7749]}
            style={styles.container}>
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
