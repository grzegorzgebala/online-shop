import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { directive } from '@babel/types';

function App() {
  return (
    <div className="contaienr">
      <div className="row">
        <div className="col-6">column number one</div>
        <div className="col-6">column number two</div>
      </div>
    </div>
  );
}

export default App;
