import Header from './components/Header/Header';
import './assets/App.css';
import Favoris from './components/Favoris/Favoris';
import Search from './components/SearchAreas/Search';
import DisplayBooks from './components/DisplayBooks/DisplayBooks';
import {useState} from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [categorie, setCategory] = useState("");
  return (
    <>
    < Header />
    < Favoris />
    < Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}categorie={categorie} setCategory={setCategory}/>
    < DisplayBooks searchTerm={searchTerm} categorie={categorie}/>
    </>
  )
}

export default App
