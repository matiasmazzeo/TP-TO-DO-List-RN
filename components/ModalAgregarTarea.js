import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

export default function ModalAgregarTarea({ visible, cerrarModal, agregarTarea }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const manejarAgregarTarea = () => {
    if (nombre.trim() === '' || descripcion.trim() === '') {
      alert('Por favor, completa todos los campos');
      return;
    }
    const nuevaTarea = {
      id: Date.now(),
      nombre,
      descripcion,
      completada: false,
    };
    agregarTarea(nuevaTarea);
    setNombre('');
    setDescripcion('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        <TextInput
          placeholder="Nombre de la tarea"
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          placeholder="Descripción"
          style={styles.input}
          value={descripcion}
          onChangeText={setDescripcion}
        />
        <Button title="Agregar Tarea" onPress={manejarAgregarTarea} />
        <Button title="Cancelar" onPress={cerrarModal} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});
