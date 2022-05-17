import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Grid, Container } from "@mui/material";

import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <Container>
      <PostCard />
      <PostCard />
      <PostCard />
    </Container>
  );
}
