import classes from './Popup.module.css';
import { Fragment, useRef, useState } from 'react';

const Popup = (props) => {

    const seatRef = useRef();
    const [noSeats, setNoSeats] = useState('100');

    const submitHandler = (event) => {
        event.preventDefault();
        var enteredSeats = seatRef.current.value;
        
        var noseats = noSeats.toString();
        noseats = +noseats;
        if(noseats < enteredSeats) {
            return alert('Cheack seat availability');
        }

        if(enteredSeats < 1) {
            return alert('Enter valid number of seats');
        }

        noseats -= enteredSeats;
        setNoSeats(noseats);
        seatRef.current.value = '';
    }

    const closeHandler = () => {
        props.onChange(true);
    }

    return(
        <Fragment>
            <div className={classes.backdrop}/>
            <div className={classes.modal}>
                <header  className={classes.header}>
                    <h2>Book your tickes now</h2>
                </header>
                <div>
                    <form onSubmit={submitHandler}>
                        <h3>{props.value}</h3>
                        <p>Avilable tickets - <span>{noSeats}</span></p>
                        <label htmlFor="seats">Enter number of Tickets: </label>
                        <input type="text" id='seats' ref={seatRef} />
                        <button>book</button>
                    </form>
                </div>
                <footer>
                    <button onClick={closeHandler}>close</button>
                </footer>
            </div>    
        </Fragment>
    );
}

export default Popup;