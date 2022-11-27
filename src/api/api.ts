import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const getData = async (url: string) => {
   const querySnapshot = await getDocs(collection(db, url));
   return querySnapshot;
};

export default getData;
