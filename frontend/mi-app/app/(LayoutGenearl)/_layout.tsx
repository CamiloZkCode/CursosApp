import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WithFooterLayout() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Slot />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
