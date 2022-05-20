import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";

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
        <Card sx={{ m: 3 }}>
          <CardContent>
            <Button
              variant="contained"
              color="button"
              sx={{
                marginLeft: "auto",
                fontFamily: "'Baloo Da 2', 'cursive'",
                fontSize: "20px",
              }}
              disableElevation
            >
              Follow Ups
            </Button>
            <Button
              variant="contained"
              color="button"
              sx={{
                marginLeft: "auto",
                fontFamily: "'Baloo Da 2', 'cursive'",
                fontSize: "20px",
              }}
              disableElevation
            >
              Paws
            </Button>
          </CardContent>
        </Card>
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
