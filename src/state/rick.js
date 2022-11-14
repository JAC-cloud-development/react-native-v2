import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  characters: [],
};

export const rickSlice = createSlice({
  name: 'rick',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const {
  setCharacters,
} = rickSlice.actions;

export const rickActions = {
  setCharacters,
}

export default rickSlice.reducer;

export const rickSelectors = {
  characters: (state) => _.get(state, 'rick.characters', []),
};
