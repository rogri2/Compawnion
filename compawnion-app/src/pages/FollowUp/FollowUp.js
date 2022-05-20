import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

import FollowUpCard from "../../components/FollowUpCard";

import { GetAllFollowUps } from "../../services/FollowUpService";

export default function FollowUp() {
  const [followUps, setFollowUps] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await GetAllFollowUps();
      if (data.message) {
        setFollowUps(null);
      } else {
        setFollowUps(data);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Box sx={{ m: 3 }}>
        <Typography textAlign={"center"} variant="h3">
          Follow Up
        </Typography>
        <Typography textAlign={"center"} color="textSecondary" variant="body2">
          Aquí se muestran las historas de las mascotas después de haber sido
          adoptadas.
        </Typography>
      </Box>
      {followUps ? (
        followUps.map((post, index) => {
          return <FollowUpCard key={index} pet={post} />;
        })
      ) : (
        <></>
      )}
    </Container>
  );
}
