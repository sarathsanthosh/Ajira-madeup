
import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/index';
import Profile from './Pages/Profile/Profile';
import Header from './Components/Header/Header';
import Route from './routes';

 export default () => {
   return (
     <div >
       <Header />
       <Route path="/"> <Homepage /></Route>
       <Route path="/profile"><Profile /></Route>
       <Footer />
     </div>
   )
 }

