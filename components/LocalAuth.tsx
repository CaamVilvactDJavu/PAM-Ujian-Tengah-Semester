import React, { useState, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { StatusBar } from "expo-status-bar";
import {
  TouchableHighlight,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Text,
  View,
} from "react-native";

function LocalAuth() {
  const [isBiometricSupported, seIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      seIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    console.log("Kembali ke otentikasi kata sandi");
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const TwoButtonAlert = () =>
    Alert.alert(
      "Selamat Datang!",
      "Smart Application\n\nIlham Fadhlur Rahman\n120140125\nTeknik Informatika\nUTS Pengembangan Aplikasi Mobile - RA",
      [
        {
          text: "Kembali",
          onPress: () => console.log("Kembali"),
          style: "cancel",
        },
        {
          text: "Okay",
          onPress: () => console.log("Okay"),
        },
      ]
    );

  const handleBiometricAuth = async () => {
    // check if hardware supports biometric
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // fall back to default authentication method (password) if biometric is not available
    if (!isBiometricAvailable)
      return alertComponent(
        "Silahkan masukkan Password anda!",
        "Biometrics Auth tidak support",
        "Okay",
        () => fallBackToDefaultAuth()
      );

    // check biometric types available ( fingerprint, facial recognition, iris recognition)
    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
    // check biometrics are saved locally in user's device
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        "Biometric record tidak ditemukan",
        "Silahkan Login dengan Password",
        "Okay",
        () => fallBackToDefaultAuth()
      );

    // authenticate with biometric
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login menggunakan Biometrics",
      cancelLabel: "cancel",
      disableDeviceFallback: true,
    });

    // Log the user in on success
    if (biometricAuth) {
      TwoButtonAlert();
    }
    console.log({ isBiometricAvailable });
    console.log({ supportedBiometrics });
    console.log({ savedBiometrics });
    console.log({ biometricAuth });
  };

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            textAlign: "center",
            top: 280,
            color: "white",
            backgroundColor: "green",
            marginLeft: 50,
            marginRight: 50,
          }}
        >
          {isBiometricSupported
            ? "Perangkat anda kompatibel untuk melakukan Biometrics"
            : "Face atau Fingerprint scanner tersedia pada perangkat ini"}
        </Text>
        <TouchableHighlight
          style={{
            top: 300,
          }}
        >
          <Button
            title="Login menggunakan Biometrics"
            color="black"
            onPress={handleBiometricAuth}
          />
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

export default LocalAuth;
