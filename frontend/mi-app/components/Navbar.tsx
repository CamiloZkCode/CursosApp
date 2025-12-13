import { View, Text, Pressable, StyleSheet, useWindowDimensions, Animated } from "react-native";
import { Link, router } from "expo-router";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  const [menuOpen, setMenuOpen] = useState(false);
  const slideX = useRef(new Animated.Value(-320)).current;

  useEffect(() => {
    Animated.timing(slideX, {
      toValue: menuOpen ? 0 : -320,
      duration: 280,
      useNativeDriver: true,
    }).start();
  }, [menuOpen]);

  const go = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      {/* NAVBAR */}
      <View style={styles.navbar}>
        {/* Hamburguesa */}
        {isMobile ? (
          <Pressable onPress={() => setMenuOpen(true)}>
            <Text style={styles.icon}>☰</Text>
          </Pressable>
        ) : (
          <View style={{ width: 32 }} />
        )}

        {/* Logo */}
        <Link href="/" asChild>
          <Pressable>
            <Text style={styles.brand}>Cursos.Com</Text>
          </Pressable>
        </Link>

        {/* Perfil */}
        <Pressable onPress={() => router.push("/Login")}>
          <Text style={styles.icon}>👤</Text>
        </Pressable>
      </View>

      {/* LINKS DESKTOP */}
      {!isMobile && (
        <View style={styles.desktopLinks}>
          <NavLink label="Inicio" href="/" />
          <NavLink label="Cursos" href="/cursos" />
          <NavLink label="Mi Perfil" href="/perfil" />
          <NavLink label="Mis Cursos" href="/mis-cursos" />
          <NavLink label="Soporte" href="/soporte" />
        </View>
      )}

      {/* SIDEBAR MOBILE */}
      {isMobile && menuOpen && (
        <>
          <Pressable style={styles.overlay} onPress={() => setMenuOpen(false)} />

          <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideX }] }]}>
            <Pressable onPress={() => setMenuOpen(false)} style={styles.close}>
              <Text style={styles.icon}>✕</Text>
            </Pressable>

            <SideLink label="Inicio" onPress={() => go("/")} />
            <SideLink label="Cursos" onPress={() => go("/cursos")} />
            <SideLink label="Mi Perfil" onPress={() => go("/perfil")} />
            <SideLink label="Mis Cursos" onPress={() => go("/mis-cursos")} />
            <SideLink label="Soporte" onPress={() => go("/soporte")} />

            <View style={styles.divider} />

            <SideLink label="Cerrar sesión" onPress={() => go("/login")} danger />
          </Animated.View>
        </>
      )}
    </>
  );
}

/* ---------- COMPONENTES AUX ---------- */

function NavLink({ label, href }: any) {
  return (
    <Link href={href} asChild>
      <Pressable>
        <Text style={styles.link}>{label}</Text>
      </Pressable>
    </Link>
  );
}

function SideLink({ label, onPress, danger }: any) {
  return (
    <Pressable onPress={onPress} style={styles.sideItem}>
      <Text style={[styles.sideText, danger && { color: "#DC2626" }]}>
        {label}
      </Text>
    </Pressable>
  );
}

/* ---------- ESTILOS ---------- */

const PURPLE = "#A435F0";

const styles = StyleSheet.create({
  navbar: {
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    zIndex: 10,
  },
  brand: {
    fontSize: 22,
    fontWeight: "800",
    color: PURPLE,
  },
  icon: {
    fontSize: 26,
  },
  desktopLinks: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 28,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  link: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1D1F",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 20,
  },
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: "#FFF",
    padding: 20,
    zIndex: 30,
  },
  close: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  sideItem: {
    paddingVertical: 14,
  },
  sideText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1C1D1F",
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 20,
  },
});
