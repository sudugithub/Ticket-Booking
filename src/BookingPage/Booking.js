import Datas from "./Data";
import Popup from "../Popup/Popup";
import { useState } from 'react';

const Booking = () => {
    
    let movies = [
        {
            id: 1,
            movie: 'Gajini',
            actor: 'Suriya'
        },
        {
            id:4,
            movie: 'Thalaiva',
            actor: 'Vijay'
        },
        {
            id:5,
            movie: 'Vaali',
            actor: 'Ajith'
        },
        {
            id:10,
            movie: 'Doctor',
            actor: 'Siva'
        }
    ];

    localStorage.setItem("smovies", JSON.stringify(movies));

    const [popup, setPopup] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [movie, setMovie] = useState('');

    const closeHandler = (val) => {
        setIsClose(val);
    }

    const openHandler = (val, movie) => {
        setPopup(val);
        setMovie(movie);
        setIsClose(false);
    }

    return(
        <div>
            {popup && !isClose && <Popup onChange={closeHandler} value={movie}/>}
            <Datas onClick={openHandler}/>
        </div>
    );
}

export default Booking;