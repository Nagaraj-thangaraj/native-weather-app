import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  const city = "vellore";

  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  useEffect(() => {
    // const apiKey = "60d169f7faf71bc2258f42d76a9a7b4a";
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const apiUrl = "https://api.npoint.io/2bec961ac82f038212e1";
    // const params = {
    //   key: apiKey,
    // };

    // axios
    //   .get(apiUrl, { params })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    axios.get(apiUrl).then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <SearchBar />
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#441ec3",
    alignItems: "center",
    justifyContent: "center",

  },
});
