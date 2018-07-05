import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken("pk.eyJ1Ijoicnlhbmxpc3pld3NraSIsImEiOiJjamo5MHQ3bzEwYWtwM3BsaDJuNGZubXYxIn0.lk66Ohmpd3j8s945fi01jA")

const coordinates = [
  [
    -122.40181,
    37.768249
  ],
  [
    -122.40181,
    37.768249
  ],
  [
    -122.458705,
    37.763935
  ],
  [
    -122.4767259,
    37.7283771
  ],
  [
    -122.4766695,
    37.7283728
  ],
  [
    -122.393775,
    37.768299
  ],
  [
    -122.3922545,
    37.765967
  ],
  [
    -122.47598965,
    37.7266635
  ],
  [
    -122.3897115,
    37.768046
  ],
  [
    -122.476339666667,
    37.727876
  ],
  [
    -122.4494492,
    37.8060998
  ],
]

export default class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      coordinates: coordinates,
    }
  }

  renderMarker = (index) => {
    const id = `pointMarker${index}`
    const coordinate = this.state.coordinates[index]


    return(
      <Mapbox.PointAnnotation
        key={id}
        id={id}
        coordinate={coordinate}
      >
      <View style={styles.markerContainer}>
          <View style={styles.markerFill} />
      </View>

      </Mapbox.PointAnnotation>
    )
  }

  renderMarkers = () => {
    const markers = [];

    for(i = 0; i < this.state.coordinates.length; i++){
      markers.push(this.renderMarker(i))
    }
    return markers
  }

  render() {
    return (
      <View style={styles.container}>
         <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={10}
            centerCoordinate={[-122.4194, 37.7749]}
            style={styles.container}>

            { this.renderMarkers() }
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

  markerFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor:'black',
    transform: [{ scale: 0.4 }],
  },

  markerContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9B9B9B',
    borderRadius: 10,
  },
});
