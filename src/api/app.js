import axios from 'axios'
import {store} from '../state';
import {rickActions, rickSelectors} from '../state/rick';

export const getCharacterList = async (search, status, page) => {
  try {
    const editedStatus = status === 'all' ? undefined : status
    const params = {
      name: search,
      status: editedStatus,
      page
    }
    const {data: characters} = await axios.get(`/character`, {params});
    console.log({characters});
    if (!page || page === 1) {
      store.dispatch(rickActions.setCharacters(characters.results))
    } else {
      const state = store.getState()
      const localList = rickSelectors.characters(state)
      store.dispatch(rickActions.setCharacters([...localList, ...characters.results]))
    }
    return characters
  } catch (e) {
    store.dispatch(rickActions.setCharacters([]))
    console.log({errorGetCharacters: e});
    return [];
  }
};
