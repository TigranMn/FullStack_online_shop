import { useAppSelector } from '../store';

export function useAuth() {
   const { email, token, id, name, lastName } = useAppSelector(
      (state) => state.user
   );

   return {
      isAuth: !!email,
      email,
      token,
      id,
      name,
      lastName
   };
}
