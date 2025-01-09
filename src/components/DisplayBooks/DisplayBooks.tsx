import { bookData } from "../../services/api";
import "./DisplayBooks.css"

interface ITerms{
    searchTerm : string ;
    categorie : string ;
}

export default function DisplayBooks ({searchTerm, categorie}: ITerms){

    //Pas besoin de la constante Allbooks en temps normal, mais je compte migrer sur une API après donc il faudra fetch et await.
    function Booksfiltered (){
        if(categorie===""){

        
        if(searchTerm===""){
            const BooksToDisplay = bookData;
            return BooksToDisplay
        }
        const BooksToDisplay = bookData.filter((book)=>
            // Lorsque je ferai appel à l'API, il faudra rajouter les auteurs, description etc etc
        book.titre.toLowerCase().includes(searchTerm.toLowerCase())

        )
        return BooksToDisplay
    }else{
        const BooksToDisplay = bookData.filter((book)=>
            // Lorsque je ferai appel à l'API, il faudra rajouter les auteurs, description etc etc
        book.category.includes(categorie))
        return BooksToDisplay
    }
    }
    
    return(
        
        <section className="displayBooks">
           
        {Booksfiltered().map((book,index)=>(
            <img key={index} src={`./public/${book.image}.jpg`} alt="" />
        ))}

        </section>
    
    )
 
}