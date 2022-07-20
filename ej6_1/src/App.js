import {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Saludo from './components/Saludo';
import './App.css';

function App() {
  let [input, setInput] = useState("")
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <>
            <input value={input} type='text' onChange={(e) => setInput(e.target.value)} />
            <Link to={`/saludo/${input}`}><button>Enviar</button></Link>
          </>
        } />
        <Route path='/saludo/:nombre' element={<Saludo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
