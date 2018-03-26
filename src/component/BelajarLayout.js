import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class BelajarLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }
  getWeather= () => {
     let url='http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=40722390ec41525035980b5536bbe38b&units=metric';
     fetch (url)
     .then((response) => response.json())
     .then((responseJson) => {
        console.log(responseJson);
       this.setState({
         forecast: {
           main: responseJson.weather[0].main,
           description: responseJson.weather[0].description,
           temp: responseJson.main.temp
         }
       });
     }
   );
  }
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
            <Text style={styles.text} > Prakiraan Cuaca </Text>
        </View>

        <View style={styles.box2}>
            <Text style={styles.text} > Masukan Nama Kota </Text>
            <View style={{ marginLeft: 50, marginRight: 50, padding: 10, backgroundColor: 'white' }}>
              <TextInput
              style={{ height: 40 }}
                onChangeText={(city) => this.setState({ city })}
              />
            </View>
            <View style={{ marginTop: 10, marginLeft: 50, marginRight: 50, padding: 1 }}>
              <Button
                onPress={
                  () => this.getWeather()
                }
                title="Lihat"
                accessibilityLabel="Klik untuk melihat"
              />
            </View>
        </View>

        <View style={styles.box3}>
          <View>
            <Text style={{ padding: 10, fontSize: 20 }} >
              {this.state.city} {'\n'}
              Suhu{'\t'}{'\t'}: {this.state.forecast.temp} Celcius {'\n'}
              Cuaca{'\t'}{'\t'}: {this.state.forecast.main} {'\n'}
              Deskripsi{'\t'}: {this.state.forecast.description}
            </Text>
           </View>
        </View>

        <View style={styles.box1}>
            <Text style={styles.text} >copyright @Whidi Harta</Text>
        </View>

  </View>
      );
    }
  }
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.15,
    backgroundColor: 'green',
  },
  box2: {
    flex: 0.5,
    backgroundColor: 'green',
    margin: 20
  },
  box3: {
    flex: 1,
    backgroundColor: 'green',
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: 'green',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },

  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 17,
    fontSize: 20
  }
});
