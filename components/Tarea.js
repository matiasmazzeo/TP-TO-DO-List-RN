import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Tarea({ tarea, completar, eliminar }) {
  return (
    <View style={[styles.tarea, tarea.completada ? styles.tareaCompletada : null]}>
      <Text style={styles.nombre}>{tarea.nombre}</Text>
      <Text>{tarea.descripcion}</Text>
      <Button
        title={tarea.completada ? 'Desmarcar' : 'Completar'}
        onPress={() => completar(tarea.id)}
      />
      <Button title="Eliminar" onPress={() => eliminar(tarea.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  tarea: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  tareaCompletada: {
    backgroundColor: '#d4edda',
  },
  nombre: {
    fontWeight: 'bold',
  },
});
