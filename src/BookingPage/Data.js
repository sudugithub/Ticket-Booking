import Movies from "./Movies";

const Datas = (props) => {

    let deSerMovies = JSON.parse(localStorage.getItem("smovies"));

    const changeHandler = (val, mov) => {
      props.onClick(val, mov);
    } 
    return(
        <ul>
            {deSerMovies.map( data => (
              <Movies 
                onChange={changeHandler}
                key={data.id}
                movie={data.movie}
                actor={data.actor} 
              />  
            ))}
        </ul>
    );
} 

export default Datas;