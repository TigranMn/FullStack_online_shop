import { Button, CircularProgress } from '@mui/material';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import getData from '../../../api/api';
import { db } from '../../../firebase';
import { TFaqItem } from '../../About/accordion/Accordion';

function AdminFAQ() {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [questions, setQuestions] = useState<TFaqItem[]>([]);
   const [newQuestion, setNewQuestion] = useState<string>('');
   const [newAnswer, setNewAnswer] = useState<string>('');

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

   const deleteQuestion = (id: string) => {
      deleteDoc(doc(db, 'faq', id)).then(() => {
         setQuestions(questions.filter((el) => el.id !== id));
      });
   };

   const addQuestion = () => {
      const newFaqItem: Omit<TFaqItem, 'id'> = { question: newQuestion, answer: newAnswer };
      addDoc(collection(db, 'faq'), newFaqItem)
         .then((res) => {
            setQuestions([{ ...newFaqItem, id: res.id }, ...questions]);
         })
         .then(() => {
            setNewAnswer('');
            setNewQuestion('');
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
         {!isLoading && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <input
                  value={newQuestion}
                  type='text'
                  placeholder='Fill the question'
                  onChange={(e) => setNewQuestion(e.target.value)}
               />
               <textarea
                  value={newAnswer}
                  placeholder='Fill the answer'
                  onChange={(e) => setNewAnswer(e.target.value)}
               />
               <Button onClick={addQuestion}>Add</Button>
            </div>
         )}
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
