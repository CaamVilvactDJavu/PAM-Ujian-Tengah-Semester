import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Button } from "react-native";
import BatteryLevel from "./components/BatteryLevel";
import LocalAuth from "./components/LocalAuth";

export default function App() {
  return (
    <SafeAreaView>
      <LocalAuth />
      <View>
        <Text
          style={{
            fontSize: 50,
            textAlign: "center",
          }}
        >
          Smart Application
        </Text>
        <BatteryLevel />
      </View>
    </SafeAreaView>
  );
}
