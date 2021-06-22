import React from "react";
import { Alert } from "react-native";
import axios from "axios";
import Loading from "./Loading";
import Weather from './Weather'
import * as Location from "expo-location";

const API_KEY = '326d931858d45c0bd124d45e17bb2156';
export default class extends React.Component {
  state = {
  isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading:false, temp, condition: weather[0].main})
  }
  // Send to API and get weather!
  getLocation = async () => {
    console.log("getLocation Start!");
    try {
      // throw Error();
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state
    return isLoading ? (
      <Loading />
    ) : (
        <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
