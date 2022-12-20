import {
   collection,
   doc,
   DocumentData,
   DocumentSnapshot,
   getDoc,
   getDocs,
   query,
   QuerySnapshot,
   where
} from 'firebase/firestore';
import { db } from '../firebase';
import { TProduct, TUser } from '../types';

const getData = async (url: string): Promise<QuerySnapshot<DocumentData>> => {
   const querySnapshot = await getDocs(collection(db, url));
   return querySnapshot;
};

export const getProducts = async (url: string): Promise<QuerySnapshot<DocumentData>> => {
   let querySnapshot = await getDocs(collection(db, url));

   querySnapshot = await getDocs(collection(db, url));
   return querySnapshot;
};

export const getUser = async (userId: string) => {
   const collRef = collection(db, 'users');
   const q = query(collRef, where('id', '==', userId));
   const snaps: QuerySnapshot<DocumentData> = await getDocs(q);
   const userRef = doc(db, 'users', snaps.docs[0].id);
   console.log('asdasdasd', userRef, snaps.docs[0].data());
   return { userRef, snaps };
};
getUser('S5lqDuF5J1O9qX1xcBtPIQW8MlI3');

export const getAllUsers = async () => {
   const usersArray = <TUser[]>[];
   const users = await getDocs(collection(db, 'users'));
   users.forEach((item) => usersArray.push(item.data() as TUser));
   console.log(usersArray);
   return usersArray;
};

export const getProduct = async (url: string, id: string): Promise<TProduct> => {
   const snap: DocumentSnapshot<DocumentData> = await getDoc(doc(db, url, id));
   if (snap.exists()) {
      return snap.data() as TProduct;
   } else {
      throw new Error('Product doesnt exist');
   }
};

export default getData;
