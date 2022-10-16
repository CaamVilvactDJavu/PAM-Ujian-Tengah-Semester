import React, { useState, useEffect } from "react";
import * as Battery from "expo-battery";
import { StyleSheet, Text, View } from "react-native";

function BatteryLevel() {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    _subscribe();
  }, []);

  useEffect(() => {
    return () => {
      _unsubscribe();
    };
  }, []);

  const _subscribe = async () => {
    const newbatteryLevel = await Battery.getBatteryLevelAsync();
    setBatteryLevel(newbatteryLevel);
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(newbatteryLevel);
      console.log("batteryLevel changed!", batteryLevel);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  return (
    <View style={styles.container}>
      <Text>Nível de Bateria: {batteryLevel * 100} %</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1515",
  },
});

export default BatteryLevel;
