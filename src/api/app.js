import axios from 'axios'
import {store} from '../state';
import {rickActions} from '../state/rick';

export const getCharacterList = async (search, status) => {
  try {
    const editedStatus = status === 'all' ? undefined : status
    const params = {
      name: search,
      status: editedStatus
    }
    const {data: characters} = await axios.get(`/character`, {params});
    console.log({characters});
    store.dispatch(rickActions.setCharacters(characters.results))
    return characters
  } catch (e) {
    store.dispatch(rickActions.setCharacters([]))
    console.log({errorGetCharacters: e});
    return [];
  }
};
