import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
//import { Link } from 'react-router-dom'
import ProfileCard from "../components/ProfileCard";
import PostCardProfile from "../components/PostCardProfile";
//import { maxWidth } from '@mui/system';

import { GetById } from "../services/UsuarioService";

export default function Profile() {
  const { usuarioId } = useParams();
  const [usuario, setUsuario] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await GetById(usuarioId);
      if (data.message) {
        setUsuario(null);
      } else {
        setUsuario(data);
      }
    }
    fetchData();
  }, []);

  return usuario ? (
    <Container sx={{ maxWidth: 950 }}>
      <ProfileCard usuario = {usuario} />
      <Container>
        <PostCardProfile />
      </Container>
    </Container>
  ) : (
    <h1>Usuario no registrado.</h1>
  );
}
