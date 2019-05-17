import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "native-base";

class Landing extends React.Component {
  render() {
    const myBackground = require("../assets/icons/landing.jpg");
    return (
      <View>
        <ImageBackground
          source={myBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to Poke Search!</Text>
            <Button
              block={true}
              style={styles.buttonStyle}
              onPress={() => this.props.switchScreen("search")}
            >
              <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 20,
    color: "blue",
    alignItems: "center",
    textAlign: "center"
  },
  buttonStyle: {
    marginTop: 10,
    margin: 10
  },
  buttonText: {
    color: "white"
  }
};

export default Landing;
