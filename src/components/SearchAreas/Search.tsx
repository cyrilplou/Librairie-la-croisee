import './Search.css'
import { bookData } from '../../services/api'
import { useEffect, useState } from 'react';

interface TermsProp{
    setSearchTerm : (value: string) => void ;
    setCategory : (value: string) => void ;
    searchTerm: string;
    categorie:string;
    searchIsActive : boolean;
    setSearchIsActive: (value: boolean) => void ;
}

export default function Search({setSearchTerm, setCategory, searchTerm, categorie, searchIsActive, setSearchIsActive}: TermsProp){

    const FetchAllCategory = [...new Set(bookData.map(book=>book.category).flat())];
    // Je limite le nom de category que je vais afficher sur la page.
    const reduceCategory = FetchAllCategory.slice(2,6)

    function resetSearch(){
        setCategory("")
    }
    useEffect(()=>{
       resetSearch()
    }, [searchTerm])

   

    return (
        <section className={`SearchArea${searchIsActive ?"Active":""}`}>
            <input onClick={()=>{setSearchIsActive(true)}} onChange={(event)=>{setSearchTerm(event.target.value)}} className="SearchBar" type="text" name="search" placeholder='Rechercher un titre, auteur, ...'/>
            

            <section className="category">
            <button onClick={resetSearch} key="reset" className={`categoryButton`}>Tous</button>

            {reduceCategory.map((category) => (

                <button onClick={()=>{setCategory(category)}} key={category} className={`categoryButton${categorie===category ? "selected":""}`}>{category}</button>
  ))} 
   
            </section>
        </section>
    )
    
}