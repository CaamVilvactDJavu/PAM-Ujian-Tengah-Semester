import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Button,
} from "react-native";
import Speech from "./components/Speech";
import LocalAuth from "./components/LocalAuth";
import TodoList from "./components/TodoList";

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
        <TodoList />
      </View>
    </SafeAreaView>
  );
}
