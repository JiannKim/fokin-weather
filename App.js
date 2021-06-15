import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch (err) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  render() {
    return <Loading />;
  }
}
