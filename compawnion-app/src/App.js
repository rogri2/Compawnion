import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import theme from './temaConfig'

// Webpages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Registro from './pages/Registro';
import LogIn from './pages/LogIn';
import Publish from './pages/Publish';
import AdoptFormat from './pages/AdoptFormat';
import PendingAdoptions from './pages/PendingAdoptions';
import Mascota from './pages/Mascota';

import FollowUp from './pages/FollowUp/FollowUp';
import CrearFU from './pages/FollowUp/CrearFU';
import FollowUpIndividual from './pages/FollowUp/FollowUpIndividual';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Fragment>
        <Navbar />
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/perfil/:usuarioId" element={ <Profile /> } />
            <Route exact path="/busqueda" element={ <Search /> } />
            <Route exact path="/registro" element={ <Registro /> } />
            <Route exact path="/login" element={ <LogIn /> } />
            <Route exact path="/publicar" element={ <Publish /> } />
            <Route exact path="/formato-adopcion/:mascotaId" element={ <AdoptFormat /> } />
            <Route exact path="/adopciones" element={ <PendingAdoptions /> } />
            <Route exact path="/mascota/:postId" element={ <Mascota /> } />

            <Route exact path="/follow-up" element={ <FollowUp /> } />
            <Route exact path="/follow-up/crear/:adopcionId" element={ <CrearFU /> } />
            <Route exact path="/follow-up/:followUpId" element={ <FollowUpIndividual /> } />
        </Routes>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
