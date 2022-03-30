import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Registro from './pages/Registro';
import LogIn from './pages/LogIn';
import Publish from './pages/Publish';
import AdoptFormat from './pages/AdoptFormat';
import PendingAdoptions from './pages/PendingAdoptions';

import FollowUp from './pages/FollowUp/FollowUp';
import CrearFU from './pages/FollowUp/CrearFU';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/perfil/:id" element={ <Profile /> } />
          <Route exact path="/busqueda" element={ <Search /> } />
          <Route exact path="/registro" element={ <Registro /> } />
          <Route exact path="/login" element={ <LogIn /> } />
          <Route exact path="/publicar" element={ <Publish /> } />
          <Route exact path="/formato-adopcion" element={ <AdoptFormat /> } />
          <Route exact path="/adopciones" element={ <PendingAdoptions /> } />

          <Route exact path="/follow-up" element={ <FollowUp /> } />
          <Route exact path="/follow-up/crear" element={ <CrearFU /> } />
      </Routes>
    </Fragment>
  );
}

export default App;
