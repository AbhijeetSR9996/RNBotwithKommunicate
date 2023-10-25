import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const CustomFAB = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.fabText}>💬</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    left: 300,
  },
  fabText: {
    fontSize: 30,
    color: 'white',
  },
});

export default CustomFAB;
