import { db } from '../../../../firebase';
import { getDocs, collection, setDoc, doc } from 'firebase/firestore';

export async function getLessProdId(): Promise<string[]> {
   let arrLessProdId: string[] = [];
   const notifications = await getDocs(collection(db, '/notifications'));
   notifications.forEach((doc) => {
      if (doc.data().lessProducts) {
         arrLessProdId = doc.data().lessProducts;
      }
   });
   console.log('databaseId ',arrLessProdId);
   return arrLessProdId;
}

export async function getOldUsersId (): Promise<string[]> {
   let arrPrevUsersId: string[] = [];                              
   const notifications = await getDocs(collection(db, '/notifications'));
   notifications.forEach((doc) => {
      if (doc.data().newUsers) {
         arrPrevUsersId = doc.data().newUsers;
      }
   });
   return arrPrevUsersId;
}
async function getNotify () {
  const result = await getDocs(collection(db, 'faq'));
  result.forEach(doc => {
    console.log('faqq', doc.id, doc.data());
  });
}
//getNotify ();

export async function setLessProdIdInDatabase( newData: string[] ): Promise<void> {
   let id = '';
   const response = await getDocs(collection(db, 'notifications'));
   response.forEach((doc) => {
      if (doc.data().lessProducts) id = doc.id;
   });
   setDoc(doc(db, '/notifications', id), { lessProducts: newData }, { merge: true });
}


export async function setNewUsersIdInDatabase(newData: string[]): Promise<void> {
   let id = '';
   let finalyData: string[] = [];
   const response = await getDocs(collection(db, 'notifications'));
   response.forEach((doc) => {
      if (doc.data().newUsers) {
         id = doc.id;
         finalyData = [...doc.data().newUsers, ...newData];
      }
   });
   setDoc(doc(db, '/notifications', id), { newUsers: finalyData }, { merge: true });
}