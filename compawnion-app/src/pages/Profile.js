import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
//import { Link } from 'react-router-dom'
import ProfileCard from "../components/ProfileCard";
import PostCardProfile from "../components/PostCardProfile";
//import { maxWidth } from '@mui/system';
import PostCard from "../components/PostCard";

import { GetById } from "../services/UsuarioService";
import { GetPostsFromBookmark } from "../services/WatchListService";
import { GetLikesFromUser } from "../services/LikeService";

export default function Profile() {
  const { usuarioId } = useParams();
  const [usuario, setUsuario] = useState();
  const [option, setOption] = useState("");
  const [bookmark, setBookmark] = useState();
  const [like, setLike] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await GetById(usuarioId);
      if (data.message) {
        setUsuario(null);
      } else {
        setUsuario(data);
      }
    }
    async function getBookmarks() {
      const bmData = await GetPostsFromBookmark(usuarioId);
      setBookmark(bmData);
    }
    async function getLikes() {
      const likeData = await GetLikesFromUser(usuarioId);
      setLike(likeData);
    }
    fetchData();
    getBookmarks();
    getLikes();
  }, []);

  const handleCallback = async (childData) => {
    setOption(childData);
  };

  return usuario ? (
    <Container sx={{ maxWidth: 950 }}>
      <ProfileCard usuario={usuario} setPropPadre={handleCallback} />
      <Container>
        {option === "posts" ? (
          <>
            <h1>Posts</h1>
          </>
        ) : option === "paws" ? (
          <>
            <h1>Paws</h1>
            {like.map((post, index) => {
              if (post.isActive) {
                if (!post.isAdopted) {
                  return <PostCard key={index} pet={post._post} />;
                } else {
                  return null;
                }
              }
            })}
          </>
        ) : option === "bookmarks" ? (
          <>
            <h1>Bookmarks</h1>
            {bookmark._posts.map((post, index) => {
              if (!post.isAdopted) {
                return <PostCard key={index} pet={post} />;
              } else {
                return null;
              }
            })}
          </>
        ) : (
          <></>
        )}
      </Container>
    </Container>
  ) : (
    <h1>Usuario no registrado.</h1>
  );
}
