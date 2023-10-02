import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>   {/*주소가 변경되었을 때 새로고침 하지 않고 페이지 업데이트*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


