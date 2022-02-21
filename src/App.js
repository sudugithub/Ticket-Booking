import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import LoginForm from "./LoginPage/LoginForm";
import MainHeader from "./MainHeader/MainHeader";
import Booking from './BookingPage/Booking';
import Home from './HomePage/Home';
import AuthContext from './Store/Auth-context';
import Footer from './Footer/Footer';

function App() {
  const authCtx = useContext(AuthContext);

  return (
      <div>
        <MainHeader/>
        <Routes>
          {!authCtx.isLoggedIn && (
            <Route path='/*' element={<LoginForm/>}/>
          )}
          {authCtx.isLoggedIn && (
            <Route path='/home' element={<Home/>}/>
          )}
          {authCtx.isLoggedIn && (
            <Route path='/booking' element={<Booking/>}/>
          )}
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
