import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './firebase';
import './18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <Provider store={store}>
      <Suspense fallback={<div>Loading..</div>}>
         <App />
      </Suspense>
   </Provider>
);
