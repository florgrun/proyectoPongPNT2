import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { useAuth } from "../../Hooks/useAuth";


export default function RegistroLoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  navigation.addListener('focus', () => {
    setEmail('');
    setUsername('');
    setPassword('');
  });

  const usuarios = [
    { username: 'admin', email: 'admin@admin.admin', password: '123' },
    { username: 'PedroPalotes', email: 'pedro@pepepe.com', password: '123' },
    { username: 'MonicaMusical', email: 'monica@cine.com', password: '123' },
    { username: 'VictorBelico', email: 'victor@guerra.com', password: '123' },
    { username: 'LunaRoja', email: 'luna@roja.com', password: '123' },
    { username: 'CarlosFuria', email: 'carlos@furia.com', password: '123' },
    { username: 'MartaSol', email: 'marta@sol.com', password: '123' },
    { username: 'PedroOscuro', email: 'pedro@oscuro.com', password: '123' },
    { username: 'AndreaViento', email: 'andrea@viento.com', password: '123' },
    { username: 'SantiagoRayo', email: 'santiago@rayo.com', password: '123' },
    { username: 'FlorVerde', email: 'flor@verde.com', password: '123' },
    { username: 'NicoHielo', email: 'nico@hielo.com', password: '123' },
    { username: 'JuliaTrueno', email: 'julia@trueno.com', password: '123' },
    { username: 'TomasFuego', email: 'tomas@fuego.com', password: '123' },
    { username: 'ValenArena', email: 'valen@arena.com', password: '123' }
]
;

  const handleLogin = () => {
    try {
      if (username.length === 0 || password.length === 0) {
        throw new Error("El usuario y la contraseña son obligatorios");
      }

      const usuarioEncontrado = usuarios.find(
        (u) => u.username === username && u.password === password
      );

      if (usuarioEncontrado) {
        login(usuarioEncontrado); // guarda sesión y navega
      } else {
        throw new Error("La contraseña o el usuario son incorrectos");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión: ", error);
      Alert.alert("Error", "No se pudo iniciar sesión: " + error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Iniciar Sesión" onPress={handleLogin} />

      <Button title="¿No tiene cuenta? Regístrese" onPress={() => navigation.navigate('Login')} />

    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  link: {
  color: '#3578E5',
  fontWeight: 'bold',
  marginTop: 20,
  textAlign: 'center'
},
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  minitext: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
  },
}); 