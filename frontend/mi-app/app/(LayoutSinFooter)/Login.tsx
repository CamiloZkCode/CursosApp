import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Colors } from "@/theme/colors";

export default function LoginScreen() {
  const [isRegister, setIsRegister] = useState(false);

  // login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // register
  const [name, setName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  function login() {
    console.log("Login:", email, password);
  }

  function register() {
    if (regPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Register:", name, regEmail);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {!isRegister ? (
          <>
            <Text style={styles.title}>Iniciar Sesión</Text>

            <TextInput
              placeholder="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
            />

            <TextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry={!showLoginPassword}
            />

            <Pressable onPress={() => setShowLoginPassword(!showLoginPassword)}>
              <Text style={styles.toggle}>
                {showLoginPassword ? "Ocultar" : "Mostrar"} contraseña
              </Text>
            </Pressable>

            <Pressable style={styles.primaryBtn} onPress={login}>
              <Text style={styles.primaryText}>Ingresar</Text>
            </Pressable>

            <Pressable onPress={() => setIsRegister(true)}>
              <Text style={styles.switch}>
                ¿No tienes cuenta? Regístrate
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={styles.title}>Registrarse</Text>

            <TextInput
              placeholder="Nombre completo"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

            <TextInput
              placeholder="Teléfono"
              value={telefono}
              onChangeText={setTelefono}
              style={styles.input}
              keyboardType="phone-pad"
            />

            <TextInput
              placeholder="Correo electrónico"
              value={regEmail}
              onChangeText={setRegEmail}
              style={styles.input}
              keyboardType="email-address"
            />

            <TextInput
              placeholder="Contraseña"
              value={regPassword}
              onChangeText={setRegPassword}
              style={styles.input}
              secureTextEntry={!showRegisterPassword}
            />

            <TextInput
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
              secureTextEntry={!showRegisterPassword}
            />

            <Pressable
              onPress={() => setShowRegisterPassword(!showRegisterPassword)}
            >
              <Text style={styles.toggle}>
                {showRegisterPassword ? "Ocultar" : "Mostrar"} contraseña
              </Text>
            </Pressable>

            <Pressable style={styles.primaryBtn} onPress={register}>
              <Text style={styles.primaryText}>Crear cuenta</Text>
            </Pressable>

            <Pressable onPress={() => setIsRegister(false)}>
              <Text style={styles.switch}>
                ¿Ya tienes cuenta? Inicia sesión
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: Colors.background,
    padding: 16,
  },
  card: {
    backgroundColor: Colors.blanco,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: Colors.oscuro,
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.infoLuz,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  toggle: {
    color: Colors.primary,
    textAlign: "right",
    marginBottom: 12,
  },
  primaryBtn: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  primaryText: {
    color: Colors.blanco,
    fontWeight: "700",
  },
  switch: {
    color: Colors.darkVariant,
    textAlign: "center",
    marginTop: 10,
  },
});
