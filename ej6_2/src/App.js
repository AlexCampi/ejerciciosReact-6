import {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Operaciones from './components/Operaciones';
import './App.css';

function App() {
  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)
  return (
    <BrowserRouter>
    <div>
    <h1>{num1}</h1>
    <button type='button' onClick={()=>{setNum1(++num1)}}>+</button>
    <button type='button' onClick={()=>{setNum1(--num1)}}>-</button>
    <h1>{num2}</h1>
    <button type='button' onClick={()=>{setNum2(++num2)}}>+</button>
    <button type='button' onClick={()=>{setNum2(--num2)}}>-</button>
    </div>
    <Link to={`/operaciones/${num1}/${num2}`}><button type='button'>Operaciones</button></Link>
    <button type='button' onClick={()=>{setNum1(0); setNum2(0)}}>Reset</button>
    <Routes>
      <Route path='/operaciones/:num1/:num2' element={<Operaciones/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
