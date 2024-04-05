import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Buttton";
import Row from "./components/Row";
import calculator, { initialState } from "./utils/Calculator";

const App = ()=> {
  // Declare state to store value
  const [state, setState] = useState(initialState);

  // 
  const HandleTap = (type, value) => {
    setState((state) => calculator(type, value, state));
  };

  return (
    <View style={styles.container}>
      {/* Status bae here */}
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>

        {/* Do create componentRow */}
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => HandleTap("clear")}
          />

          <Button
            text="+/-"
            theme="secondary"
            onPress={() => HandleTap("posneg")}
          />

          <Button
            text="%"
            theme="secondary"
            onPress={() => HandleTap("percentage")}
          />

          <Button
            text="/"
            theme="accent"
            onPress={() => HandleTap("operator", "/")}
          />
        </Row>

        {/* Number */}
        <Row>
          <Button text="7" onPress={() => HandleTap("number", 7)} />
          <Button text="8" onPress={() => HandleTap("number", 8)} />
          <Button text="9" onPress={() => HandleTap("number", 9)} />
          <Button
            text="X"
            theme="accent"
            onPress={() => HandleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => HandleTap("number", 4)} />
          <Button text="5" onPress={() => HandleTap("number", 5)} />
          <Button text="6" onPress={() => HandleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => HandleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => HandleTap("number", 1)} />
          <Button text="2" onPress={() => HandleTap("number", 2)} />
          <Button text="3" onPress={() => HandleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => HandleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button text="0" onPress={() => HandleTap("number", 0)} />
          <Button text="." onPress={() => HandleTap("number", ".")} />
          <Button
            text="="
            theme="primary"
            onPress={() => HandleTap("equal", "=")}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
}

export default App;

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});