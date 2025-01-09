import './Favoris.css'
import { bookData } from '../../services/api';

interface FavProps {
    searchIsActive : boolean;
}

export default function Favoris ({searchIsActive}: FavProps){

    const FavBook = bookData.filter(book=>
        book.isFav === true
    )

    return(
        <section className={`Favoris${searchIsActive ?"Active":""}`}>
            <img className='iconeFav' src="./public/flamme.png" alt="" />
            <img className='imgFav' src={`./public/${FavBook[0].image}.jpg`} alt="" />
      </section>
    )
}