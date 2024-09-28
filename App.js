import React, { useState } from 'react';
import { View, Text, Button, FlatList, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [descripcionTarea, setDescripcionTarea] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const agregarTarea = () => {
    setTareas([...tareas, { nombre: nuevaTarea, descripcion: descripcionTarea, completada: false }]);
    setNuevaTarea('');
    setDescripcionTarea('');
    setModalVisible(false);
  };

  const marcarCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Tareas</Text>
      <FlatList
        data={tareas}
        renderItem={({ item, index }) => (
          <View style={styles.tarea}>
            <Text style={item.completada ? styles.tareaCompletada : styles.tareaPendiente}>
              {item.nombre}: {item.descripcion}
            </Text>
            <View style={styles.botonesTarea}>
              <Button
                title={item.completada ? 'Desmarcar' : 'Completar'}
                onPress={() => marcarCompletada(index)}
              />
              <Button
                title="Eliminar"
                color="red"
                onPress={() => eliminarTarea(index)}
              />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Button title="Agregar Tarea" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <TextInput
            placeholder="Nombre de la tarea"
            value={nuevaTarea}
            onChangeText={setNuevaTarea}
            style={styles.input}
          />
          <TextInput
            placeholder="Descripción de la tarea"
            value={descripcionTarea}
            onChangeText={setDescripcionTarea}
            style={styles.input}
          />
          <Button title="Agregar" onPress={agregarTarea} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tarea: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  tareaPendiente: {
    color: 'black',
    fontSize: 18,
  },
  tareaCompletada: {
    color: 'green',
    textDecorationLine: 'line-through',
    fontSize: 18,
  },
  botonesTarea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 5,
  },
});
