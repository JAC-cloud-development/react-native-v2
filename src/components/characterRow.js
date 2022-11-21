import React, {useEffect, useRef, useState} from 'react';
import {Pressable, TextInput, StyleSheet, View, ActivityIndicator, Text, Image} from 'react-native';

export const CharacterRow = ({character, onPress}) => {

  return (
    <Pressable style={[styles.container]} onPress={() => onPress(character)} >
      <Image source={{uri: character.image}} style={styles.image}/>
      <View>
        <Text style={styles.name}>{character.name}</Text>
        <Text>{character.gender}</Text>
        <Text>{character.species}</Text>
        <Text>{character.status}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 5,
    marginRight: 5
  },
  name: {
    fontWeight: '700',
    fontSize: 16
  }
});
