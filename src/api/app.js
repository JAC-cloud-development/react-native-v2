import axios from 'axios'
import {store} from '../state';
import {rickActions} from '../state/rick';

export const getCharacterList = async () => {
  try {
    const {data: characters} = await axios.get('/character');
    console.log({characters});
    store.dispatch(rickActions.setCharacters(characters.results))
    return characters
  } catch (e) {
    console.log({errorGetCharacters: e});
    return [];
  }
};
