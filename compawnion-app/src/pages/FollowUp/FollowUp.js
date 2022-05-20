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

import { GetLikesFromUserFU } from "../../services/LikeFUService";
import { GetAllFollowUps } from "../../services/FollowUpService";

export default function FollowUp() {
  const localUser = JSON.parse(localStorage.getItem("usuario"));
  const [userData, setUserData] = useState(localUser);
  const [followUps, setFollowUps] = useState([]);
  const [like, setLike] = useState([]);
  const [option, setOption] = useState("follow_ups");

  useEffect(() => {
    async function fetchData() {
      const data = await GetAllFollowUps();
      if (data.message) {
        setFollowUps(null);
      } else {
        setFollowUps(data);
      }
    }
    async function getLikesFU() {
      if (userData !== null) {
        const likeData = await GetLikesFromUserFU(userData._id);
        setLike(likeData);
      }
    }
    fetchData();
    getLikesFU();
  }, []);

  const handleOnClick = (e, input) => {
    setOption(input);
  };

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
        {
          userData ? (

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
                  onClick={(e) => handleOnClick(e, "follow_ups")}
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
                  onClick={(e) => handleOnClick(e, "paws")}
                >
                  Paws
                </Button>
              </CardContent>
            </Card>
          ) : (
            <></>
          )
        }
      </Box>

        {option === "follow_ups" ? (
          <>
            <h1>Follow Ups</h1>
            {followUps ? (
              followUps.map((post, index) => {
                return <FollowUpCard key={index} pet={post} />;
              })
            ) : (
              <></>
            )}
          </>
        ) : option === "paws" ? (
          <>
            <h1>Paws</h1>
            {like.map((mascota, index) => {
              if (mascota.isActive) {
                return <FollowUpCard key={index} pet={mascota._followUp} />;
              }
            })}
          </>
        ) : (
          <>
            <h1>Error, intente más tarde.</h1>
          </>
        )}
    </Container>
  );
}
