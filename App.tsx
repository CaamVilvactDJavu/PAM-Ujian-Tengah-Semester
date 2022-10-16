import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Button } from "react-native";
import Speech from "./components/Speech";
import LocalAuth from "./components/LocalAuth";

export default function App() {
  return (
    <SafeAreaView>
      <LocalAuth />
      <Speech />
      <View>
        <Text
          style={{
            fontSize: 50,
            textAlign: "center",
          }}
        >
          Smart Application
        </Text>
      </View>
    </SafeAreaView>
  );
}
