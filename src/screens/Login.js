import React from "react";
import { View, Text } from "react-native";
import firebase from "react-native-firebase";
export default class Login extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        console.log(user);
      }
    });
    firebase
      .auth()
      .createUserWithEmailAndPassword("kris@gmail.com", "111111")
      .then(user => console.log(user))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login</Text>
      </View>
    );
  }
}
