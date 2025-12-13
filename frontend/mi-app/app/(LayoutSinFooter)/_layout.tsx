// app/(no-footer)/_layout.tsx
import { Slot } from "expo-router";
import { View } from "react-native";
import Navbar from "@/components/Navbar";

export default function NoFooterLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <Slot />
    </View>
  );
}
