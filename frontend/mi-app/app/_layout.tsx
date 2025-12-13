// app/_layout.tsx
import { Slot } from "expo-router";
import { View } from "react-native";
import { Colors } from "@/theme/colors";
import Navbar from "@/components/Navbar";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Slot />
    </View>
  );
}
