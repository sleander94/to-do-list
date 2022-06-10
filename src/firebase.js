import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyABg2iVNLRBHVmNvqPklZf-WaG1hAHdgGQ',
  authDomain: 'to-do-list-d5cf0.firebaseapp.com',
  projectId: 'to-do-list-d5cf0',
  storageBucket: 'to-do-list-d5cf0.appspot.com',
  messagingSenderId: '696068432314',
  appId: '1:696068432314:web:84dc837dea5ce50758fd83',
  measurementId: 'G-RTPQ1Q08NJ',
};

initializeApp(firebaseConfig);
const firestore = getFirestore();

export default firestore;
