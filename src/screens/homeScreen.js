import React, {useEffect, useRef, useState} from 'react';
import {Pressable, TextInput, StyleSheet, View, Text, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useDispatch, useSelector} from 'react-redux';
import {setUserToken, userActions, userSelectors} from '../state/user';
import {Button} from '../components/button';
import {getCharacterList} from '../api/app';
import {rickSelectors} from '../state/rick';
import {CharacterRow} from '../components/characterRow';
import {InputText} from '../components/inputText';
import {RadioButton} from '../components/radioButton';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const characters = useSelector(rickSelectors.characters)
  const [loading, setLoading] = useState(false);
  const [footerLoader, setFooterLoader] = useState(false);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    refreshData()
  }, [search, status]);

  const refreshData = async (page) => {
    setLoading(true)
    console.log(page)
    await getCharacterList(search, status, page)
    setPage(page || 1)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const onPressLogout = () => {
    dispatch(userActions.setUserToken(''))
  }

  const onPressCharacter = (character) => {
    navigation.navigate('CharacterDetail', {character})
  }

  return (
    <View style={styles.container}>
      {/*<Button text={'Logout'} onPress={onPressLogout}/>*/}
      <InputText
        value={search}
        onChangeText={setSearch}
        label={'Cerca'}
        placeholder={'Inserisci il testo da ricercare'}
        containerStyle={styles.inputSearch}
      />
      <RadioButton text={'all'} elementSelected={status} onPress={setStatus}/>
      <RadioButton text={'alive'} elementSelected={status} onPress={setStatus}/>
      <RadioButton text={'dead'} elementSelected={status} onPress={setStatus}/>
      <RadioButton text={'unknown'} elementSelected={status} onPress={setStatus}/>

      <FlatList
        style={{flex: 1}}
        contentContainerStyle={styles.contentContainer}
        data={characters}
        renderItem={({item}) => <CharacterRow character={item} onPress={onPressCharacter}/>}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={footerLoader ? <ActivityIndicator/> : <View/>}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refreshData}
          />
        }
        onEndReached={() => {
          setFooterLoader(true)
          setTimeout(async () => {
            await refreshData(page + 1)
            setFooterLoader(false)
          }, 1000)
        }}
        onEndReachedThreshold={0.01}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingBottom: 50,
  },
  inputSearch: {
    marginTop: 10,
    marginBottom: 10,
  }
});

