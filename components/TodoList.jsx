import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";

export default class TodoList extends React.Component {
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <ScrollView>
          <View>
            <View />
            <Text
              style={{
                top: 50,
                fontSize: 20,
              }}
            >
              ToDoList
            </Text>
            <View />
          </View>
          <View
            style={{
              marginVertical: 70,
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "black",
              width: 350,
              alignSelf: "center",
            }}
          >
            <TextInput onSubmitEditing={this._handleTextChange} />
            <TextInput onSubmitEditing={this._handleTextChange} />
            <TextInput onSubmitEditing={this._handleTextChange} />
            <TextInput onSubmitEditing={this._handleTextChange} />
            <TextInput onSubmitEditing={this._handleTextChange} />
            <TextInput onSubmitEditing={this._handleTextChange} />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          ></View>
        </ScrollView>
      </View>
    );
  }
}
