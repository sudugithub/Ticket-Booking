import { useContext } from 'react';
import { Link } from 'react-router-dom';
import  AuthContext  from '../Store/Auth-context';
import classes from './MainHeader.module.css';
import { useNavigate } from 'react-router-dom';

const MainHeader = () => {

    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const navigate = useNavigate();

    const LogoutHandler = () => {
        authCtx.logout();
        navigate('/');
    }

    return (
        <header className={classes.header}>
            <h1>Movie Ticket Booking Website</h1>
            <nav>
                <ul>
                    {isLoggedIn && (
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <Link to='/booking'>Booking</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                         <li>
                            <button onClick={LogoutHandler}>Logout</button>
                         </li>
                    )}
                </ul>    
            </nav>
        </header>
    );
}

export default MainHeader;