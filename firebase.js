import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');

export {
  usersCollection
}