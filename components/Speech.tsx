import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Speech from "expo-speech";

function SelamatDatang() {
  const kalimat =
    "Selamat datang di Smart Application wkwkwkwkkwkwkwkwkwkwkwk hahahahhaha muahahahmuahahah";

  const bicara = () => {
    Speech.speak(kalimat);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Tekan tombol di bawah ini!</Text>
      <Button title="Selamat Datang" onPress={bicara} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    top: 500,
    padding: 1,
  },
});

export default SelamatDatang;
