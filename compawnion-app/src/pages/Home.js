import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Grid, Container } from "@mui/material";
import PostCard from "../components/PostCard";

// IMPORTAR GET ALL POSTS
import { GetAllPosts } from "../services/PetService";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await GetAllPosts();
      if (data.message) {
        setPosts(null);
      }
      else{
        setPosts(data);
      }
    }
    fetchData();
  }, []);

  return posts ? (
    <Container>
      {posts.map((post, index) => {
        return (
            <PostCard key={index} pet={post}/>
        )
      })}
    </Container>
  ) : (
    <h1>No hay posts publicados</h1>
  );
}
