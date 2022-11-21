import React, {useEffect, useRef, useState} from 'react';
import {Pressable, TextInput, StyleSheet, View, ActivityIndicator, Text} from 'react-native';

export const RadioButton = ({disabled, text, onPress, style, elementSelected, ...props}) => {
  const isSelected = text === elementSelected
  return (
    <Pressable style={[styles.radioButton, style]} onPress={() => onPress(text)} disabled={disabled}>
      <Text >{text}</Text>
      <View style={styles.circle}>
        {isSelected && <View style={styles.innerCircle}/>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingLeft: 10
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: 'black'
  }
});
