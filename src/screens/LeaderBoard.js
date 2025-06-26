import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../Hooks/useAuth';
import UserList from '../components/UserList';

export default function LeaderBoard() {
  const { auth } = useAuth();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const top10 = [
      { nombre: 'admin', puntos: 150 },
      { nombre: 'PedroPalotes', puntos: 130 },
      { nombre: 'MonicaMusical', puntos: 110 },
      { nombre: 'VictorBelico', puntos: 100 },
      { nombre: 'LunaRoja', puntos: 95 },
      { nombre: 'CarlosFuria', puntos: 90 },
      { nombre: 'MartaSol', puntos: 85 },
      { nombre: 'PedroOscuro', puntos: 82 },
      { nombre: 'AndreaViento', puntos: 80 },
      { nombre: 'SantiagoRayo', puntos: 78 },
      { nombre: 'FlorVerde', puntos: 82 },
      { nombre: 'NicoHielo', puntos: 80 },
      { nombre: 'JuliaTrueno', puntos: 78 },
      { nombre: 'TomasFuego', puntos: 80 },
      { nombre: 'ValenArena', puntos: 78 },


    ];
    setUsuarios(top10);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking de jugadores</Text>
      <UserList usuarios={usuarios} currentUsername={auth?.user?.username} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

