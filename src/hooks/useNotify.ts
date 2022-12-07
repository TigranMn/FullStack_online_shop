import { toast } from 'react-toastify';
import { notificationTypes } from '../types';

export const useNotify = () => {
   return function (type: notificationTypes, message: string) {
      const config = {
         autoClose: 3000,
         closeOnClick: true,
         pauseOnHover: false
      };
      switch (type) {
         case notificationTypes.WARNING:
            toast.warning(message, config);
            break;
         case notificationTypes.SUCCES:
            toast.success(message, config);
            break;
         case notificationTypes.ERROR:
            toast.error(message, config);
            break;
      }
   };
};
