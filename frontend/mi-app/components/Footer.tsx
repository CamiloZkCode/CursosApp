import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/theme/colors";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.brand}>© 2025 — Cursos.com</Text>

      {/* Links */}
      <View style={styles.nav}>
        <Link href="/" asChild>
          <Pressable>
            <Text style={styles.link}>Inicio</Text>
          </Pressable>
        </Link>

        <Link href="/cursos" asChild>
          <Pressable>
            <Text style={styles.link}>Cursos</Text>
          </Pressable>
        </Link>

        <Link href="/soporte" asChild>
          <Pressable>
            <Text style={styles.link}>Soporte</Text>
          </Pressable>
        </Link>
      </View>

      {/* Social */}
      <View style={styles.social}>
        <Text style={styles.socialItem}>Instagram</Text>
        <Text style={styles.socialItem}>Facebook</Text>
        <Text style={styles.socialItem}>TikTok</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderColor: Colors.infoLuz,
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: Colors.blanco,
  },
  brand: {
    fontWeight: "600",
    color: Colors.oscuro,
    marginBottom: 8,
  },
  nav: {
    flexDirection: "row",
    gap: 18,
    marginBottom: 8,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  link: {
    fontWeight: "600",
    color: Colors.oscuro,
  },
  social: {
    flexDirection: "row",
    gap: 14,
  },
  socialItem: {
    color: Colors.darkVariant,
    fontSize: 13,
  },
});
