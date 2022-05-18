import React, { useState, useEffect } from "react";
import SearchCard from "../components/SearchCard";
import { Container } from "@mui/material";
import PostCard from "../components/PostCard";

import { SearchPost } from "../services/PetService";

export default function Search() {
  const [posts, setPosts] = useState([]);

  const handleCallback = async (childData) => {
    const data = await SearchPost(childData);

    if (data) {
      setPosts(data);
    } else {
      setPosts(null);
    }
  };

  return (
    <Container>
      <SearchCard setPropPadre={handleCallback} />
      {posts ? (
        <>
          {posts.map((post, index) => {
            return <PostCard key={index} pet={post} />;
          })}
        </>
      ) : (
        <h1>No hay posts que cumplan con la busqueda</h1>
      )}
    </Container>
  );
}
