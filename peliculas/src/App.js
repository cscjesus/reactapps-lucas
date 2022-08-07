import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Blog from './views/Blog';

import ListadoPeliculas from './views/ListadoPeliculas';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/' element={<ListadoPeliculas />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// npm install react-router-dom