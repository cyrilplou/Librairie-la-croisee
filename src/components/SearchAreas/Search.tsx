import './Search.css'
import { bookData } from '../../services/api'
import { useEffect } from 'react';

interface TermsProp{
    setSearchTerm : (value: string) => void ;
    setCategory : (value: string) => void ;
    searchTerm: string;
    categorie:string;
}

export default function Search({setSearchTerm, setCategory, searchTerm, categorie}: TermsProp){

    const FetchAllCategory = [...new Set(bookData.map(book=>book.category).flat())];
    // Je limite le nom de category que je vais afficher sur la page.
    const reduceCategory = FetchAllCategory.slice(1,6)
    useEffect(()=>{
        setCategory("")
    }, [searchTerm])

    // function changeCategorySelectedButton(category: string){
    //     setCategory(category)

    // }

    return (
        <section className='SearchArea'>
            <input onChange={(event)=>{setSearchTerm(event.target.value)}} className="SearchBar" type="text" name="search" placeholder='Rechercher un titre, auteur, ...'/>

            <section className="category">
            {reduceCategory.map((category) => (

                <button onClick={()=>{setCategory(category)}} key={category} className={`categoryButton${categorie===category ? "selected":""}`}>{category}</button>
  ))} 
   
            </section>
        </section>
    )
    
}