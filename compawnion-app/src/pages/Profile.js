import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
//import { Link } from 'react-router-dom'
import ProfileCard from "../components/ProfileCard";
import PostCardProfile from "../components/PostCardProfile";
//import { maxWidth } from '@mui/system';
import PostCard from "../components/PostCard";

import { GetById } from "../services/UsuarioService";
import { GetPostsByUser } from "../services/PetService";
import { GetLikesFromUser } from "../services/LikeService";
import { GetPostsFromBookmark } from "../services/WatchListService";

export default function Profile() {
  const { usuarioId } = useParams();
  const [usuario, setUsuario] = useState();
  const [option, setOption] = useState("posts");
  const [bookmark, setBookmark] = useState();
  const [like, setLike] = useState();
  const [posts, setPosts] = useState();

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
    async function getPosts() {
      const postsData = await GetPostsByUser(usuarioId);
      setPosts(postsData);
    }
    fetchData();
    getBookmarks();
    getLikes();
    getPosts();
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
            {
              posts ? (
                posts.map((post, index) => {
                  return <PostCard key={index} pet={post} />;
                })
              ) : (
                <></>
              )
            }
          </>
        ) : option === "paws" ? (
          <>
            <h1>Paws</h1>
            {
              like ? (
                like.map((post, index) => {
                  if (post.isActive) {
                    if (!post._post.isAdopted) {
                      return <PostCard key={index} pet={post._post} />;
                    } else {
                      return null;
                    }
                  }
                })
              ) : (
                <></>
              )
            }
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
