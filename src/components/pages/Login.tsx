import React, { useState } from 'react';

export default function Login() {
   const [login, setLogin] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   return (
      <div className="login">
         <form>
            <label htmlFor="login">
               <input
                  type="text"
                  id="login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  placeholder="login"
               />
            </label>
            <label htmlFor="password">
               <input
                  placeholder="password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </label>
            <button>Sign in</button>
            <button>Create account</button>
         </form>
      </div>
   );
}
