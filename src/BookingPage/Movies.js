import classes from './Movies.module.css';

const Movies = (props) => {

    const bookHandler = () => {
        props.onChange(true, props.movie);
    }

    return (
        <ul className={classes.movies}>
            <div>
                <h1>{props.movie}</h1>
                <p>Actor- <span>{props.actor}</span></p>
                <button onClick={bookHandler}>Book Now</button>
            </div>
        </ul>
    );
}
    

export default Movies;