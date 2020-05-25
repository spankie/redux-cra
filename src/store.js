import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import createPersistor from "redux-easy-persist";

const AsyncStorage = {
  getItem: (key) => {
    return new Promise((resolve, reject) => {
      const item = localStorage.getItem(key);
      if (!item) {
        return reject("no value");
      }
      return resolve(item);
    });
  },
  setItem: (key, value) => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, value);
        resolve(key + " set successfully");
      }catch(error) {
        reject("something went wrong");
      }
    })
  }
}

// create a persistor and pass in storeEngine and persistKey
const persistor = createPersistor({
  storeEngine: AsyncStorage,
  persistKey: 'rootState',
});

export default function configureStore(initialState={}) {
 return createStore(rootReducer, initialState, applyMiddleware(thunk, persistor));
}