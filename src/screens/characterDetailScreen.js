import React, {useEffect, useRef, useState} from 'react';
import {Pressable, TextInput, StyleSheet, View, Text, FlatList, RefreshControl, Image} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useDispatch, useSelector} from 'react-redux';
import {setUserToken, userActions, userSelectors} from '../state/user';
import {Button} from '../components/button';
import {getCharacterList} from '../api/app';
import {rickSelectors} from '../state/rick';
import {CharacterRow} from '../components/characterRow';

export const CharacterDetailScreen = ({route}) => {
  const { character } = route.params;

  console.log({character})

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: character.image}}/>
      <Text>{character.name}</Text>
      <Text>{character.gender}</Text>
      <Text>{character.species}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
  }
});

