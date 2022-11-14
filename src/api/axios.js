import axios from 'axios';
import {store} from '../state';
import {userSelectors} from '../state/user';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.interceptors.request.use(
  async (conf) => {
    const state = store.getState();
    // const token = await auth().currentUser.getIdToken(true);
    const token = userSelectors.token(state);
    //console.log({token});
    conf.headers.Authorization = `Bearer ${token}`;
    console.log({conf});
    // console.log({debugApiUrl, apiUrl: config.apiUrl});
    return conf;
  },
  (error) => {
    return Promise.reject(error);
  },
);
//
//
// const mainAxios = axios.create({
//   baseURL: config.apiUrl,
//   headers: {
//     common: {
//       'Content-Type': 'application/json',
//     },
//   },
// });
