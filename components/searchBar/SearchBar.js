import React, { useState } from "react";

import { Searchbar } from "react-native-paper";
import { Appbar } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View style={styles.searchBar}>
      <Appbar.Header style={styles.appHeadder}>
        <Appbar.BackAction onPress={() => {}} color="white" />
        <Appbar.Content title="Weather App" titleStyle={styles.appbarContent} />
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#441ec3",
    padding: 10,
  },
  appHeadder: {
    backgroundColor: "#441ec3",
    color: "white",
  },
  appbarContent: {
    color: "white",
  },
});

export default SearchBar;
