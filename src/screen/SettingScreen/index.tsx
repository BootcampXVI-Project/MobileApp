import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const SettingScreen = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Text>SettingScreen</Text>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
