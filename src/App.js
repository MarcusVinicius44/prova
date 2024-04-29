import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Descrição1 from './descrição1';
import Descrição2 from './descrição2';
import Descrição3 from './descrição3';
import Footer from './footer';
import Imagem1 from './imagem1';
import Imagem2 from './imagem2';
import Imagem3 from './imagem3';
import Navbar from './navbar';
import Texto from './texto';
import Texto2 from './texto2';
import Forms from './form';


function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
        </div>
      <Texto/>
      <Texto2/>
      <Imagem1/>
      <Imagem2/>
      <Imagem3/>
      <Descrição1/>
      <Descrição2/>
      <Descrição3/>
      <BrowserRouter>
        <Routes>
           <Route path='/contato' element={<Forms/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
