import React, {useEffect, useRef, useState} from 'react';
import {Pressable, TextInput, StyleSheet, View, Text} from 'react-native';

export const InputText = ({value, placeholder, onChangeText, label, onPress, containerStyle, style, ...props}) => {

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.inputText, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 5,
  },
  inputText: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10
  },

});
