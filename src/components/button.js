import React, {useEffect, useRef, useState} from 'react';
import {Pressable, TextInput, StyleSheet, View, ActivityIndicator, Text} from 'react-native';

export const Button = ({disabled, text, loading, onPress, style, ...props}) => {
  return (
    <Pressable style={[styles.Button, style]} onPress={onPress} disabled={disabled}>
      {!!text && !loading && <Text>{text}</Text>}
      {loading && <ActivityIndicator color={'black'} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#00aa00',
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
