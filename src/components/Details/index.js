import React from 'react';
import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from './styles';
import * as firebase from 'firebase';
import uberxImage from '~/assets/uberx.png';
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

const Details = () => (
  <Container>
    <TypeTitle>Popular</TypeTitle>
    <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

    <TypeImage source={uberxImage} />
    <TypeTitle>UberX</TypeTitle>
    <TypeDescription>R$ 6,00</TypeDescription>

    <RequestButton onPress={() => {firebase.initializeApp(firebaseConfig).database().ref().push({ title: text })}}>
      <RequestButtonText>Get a Oomph</RequestButtonText>
    </RequestButton>
  </Container>
);

export { firebase };
export default Details;
