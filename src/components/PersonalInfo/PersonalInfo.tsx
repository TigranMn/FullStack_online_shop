import { updateDoc } from '@firebase/firestore';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getUser } from '../../api/api';
import { useNotify } from '../../hooks/useNotify';
import { updateUser } from '../../redux/userSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { notificationTypes } from '../../types';
import { firebaseErrorCatch } from '../../utils/firebaseErrorCatch';

export default function PersonalInfo() {
   const userName = useAppSelector((state) => state.user.name)!;
   const userLastName = useAppSelector((state) => state.user.lastName)!;
   const userId = useAppSelector((state) => state.user.id)!;
   const [name, setName] = useState<string>(userName);
   const [lastName, setLastName] = useState<string>(userLastName);
   const [onEdit, setOnEdit] = useState<boolean>(false);
   const dispatch = useAppDispatch();
   const { t } = useTranslation();

   const handleSave = async () => {
      const user = await getUser(userId);
      updateDoc(user.userRef, { name, lastName })
         .catch((e) => firebaseErrorCatch(e.message))
         .then(() => {
            dispatch(updateUser({ name, lastName }));
            setOnEdit(false);
         });
   };

   const handleCancel = () => {
      setName(userName);
      setLastName(userLastName);
      setOnEdit(false);
   };

   const handleChange = () => {
      setOnEdit(true);
   };

   return (
      <>
         <h4>{t('Personal info')}</h4>
         <hr />
         <input
            type={'text'}
            name='username'
            onChange={(e) => setName(e.target.value)}
            readOnly={!onEdit}
            value={name}
         />
         <input
            value={lastName}
            type={'text'}
            name='userLastName'
            onChange={(e) => setLastName(e.target.value)}
            readOnly={!onEdit}
         />
         {onEdit ? (
            <>
               <button onClick={handleSave}>{t('Save')}</button>
               <button onClick={handleCancel}>{t('Cancel')}</button>
            </>
         ) : (
            <button onClick={handleChange}>{t('Change')}</button>
         )}
      </>
   );
}
