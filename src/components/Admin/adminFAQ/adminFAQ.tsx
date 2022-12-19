import { CircularProgress } from '@mui/material';
import { deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import getData from '../../../api/api';
import { db } from '../../../firebase';
import { TFaqItem } from '../../About/accordion/Accordion';

function AdminFAQ() {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [questions, setQuestions] = useState<TFaqItem[]>([]);

   useEffect(() => {
      const faq: TFaqItem[] = [];
      getData('faq')
         .then((res) => {
            res.docs.forEach((doc) => {
               const { question, answer } = doc.data();
               const id = doc.id;
               faq.push({ question, answer, id });
            });
         })
         .then(() => {
            setIsLoading(false);
            setQuestions(faq);
         });
   }, []);

   const deleteQuestion = async (id: string) => {
      await deleteDoc(doc(db, 'faq', id)).then(() => {
         setQuestions(questions.filter((el) => el.id !== id));
      });
   };

   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap'
         }}
      >
         <h3>FAQ</h3>
         {isLoading ? (
            <CircularProgress />
         ) : (
            questions.map((el) => {
               return (
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '20px',
                        width: '100%'
                     }}
                     key={el.id}
                  >
                     <p>{el.question}</p>
                     <p>
                        {el.answer} <button onClick={() => deleteQuestion(el.id)}>Delete</button>
                     </p>
                  </div>
               );
            })
         )}
      </div>
   );
}

export default AdminFAQ;
