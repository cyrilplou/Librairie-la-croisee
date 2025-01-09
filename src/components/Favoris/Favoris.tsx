import './Favoris.css'
import { bookData } from '../../services/api';

export default function Favoris (){

    const FavBook = bookData.filter(book=>
        book.isFav === true
    )

    return(
        <section className='Favoris'>
            <img className='iconeFav' src="./public/flamme.png" alt="" />
            <img className='imgFav' src={`./public/${FavBook[0].image}.jpg`} alt="" />
      </section>
    )
}