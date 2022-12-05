import logo from './logo.svg';
import React from 'react'
import './App.css';
import Form from './components/form';
import Info from './components/info';
import {useState} from 'react'

function App() {
  const [info, setInfo] = useState([]);
  const [isSubmitted, setisSubmitted] = useState(false);

  return (
    <div>
        <Form setInfo={setInfo}  setisSubmitted={setisSubmitted}/>
        <Info info={info} isSubmitted={isSubmitted} />
    </div>
  );
}

export default App;
