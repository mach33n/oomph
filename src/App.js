import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import RootScreen from './containers/Root/RootScreen';
import SplashScreen from './containers/SplashScreen/SplashScreen';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import configureStore from './redux/store/configureStore';

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCC-c_kN_UeOgkU5PvfFszr-eNKaAKz2q4",
  authDomain: "oomph-85176.firebaseapp.com",
  databaseURL: "https://oomph-85176.firebaseio.com",
  projectId: "oomph-85176",
  storageBucket: "oomph-85176.appspot.com",
  messagingSenderId: "747032968324",
  appId: "1:747032968324:web:d1a14def9951a75cf096d1",
  measurementId: "G-PXEVXWN47G"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const { store, persistor } = configureStore(rootReducer, rootSaga);

// eslint-disable-next-line no-console
console.disableYellowBox = true; // Debug Only - yellow box

// react-native-paper theme configuration
const DefaultTheme = {};
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      {/**
       *
       * PersisteGate atrasa o rendering do app ateh que o estado salvo na AsyncStorage seja salvo no Redux
       * prop `loading` pode ser null ou qualquer outro component React
       * por exemplo loading={<SplashScreen />}
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </PaperProvider>
  </Provider>
);

export { firebase };
export default App;
