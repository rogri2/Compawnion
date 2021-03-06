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

const followUpCardStyle = {
  position: "flex",
  top: "5vh",
  maxWidth: "45rem",
  paddingBottom: "30px",
  justifyContent: 'center',
  alignItems: 'center',
};

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
    <Container sx={{ followUpCardStyle }}>
      <Box sx={{display: "relative"  }}>
      <Box sx={{display: "relative" , mt: 2 }}> 
      <Typography textAlign={"center"} variant="h3" 
      sx={{
              textDecoration: "none",
              boxShadow: "none",
              color: "inherit",
              fontFamily: "'Nanum Pen Script', 'cursive'",
              fontSize: "95px",
            }}>
          Follow Up
        </Typography>

        <Typography textAlign={"center"} color="textSecondary" variant="body2">
          Aquí se muestran las historas de las mascotas después de haber sido
          adoptadas.
        </Typography>
        </Box>
        {
          userData ? (

            <Box sx={{ m: 3, justifyContent: "center", display: "flex" }}>
              <CardContent sx={{ m: 1, justifyContent: "center", display: "static" }} >
                <Button
                  variant="contained"
                  color="button"
                  sx={{
                    marginLeft: "auto",
                    marginRight: "50px",
                    fontFamily: "'Baloo Da 2', 'cursive'",
                    fontSize: "35px",
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
                    marginLeft: "50px",
                    fontFamily: "'Baloo Da 2', 'cursive'",
                    fontSize: "35px",
                  }}
                  disableElevation
                  onClick={(e) => handleOnClick(e, "paws")}
                >
                  Paws
                </Button>
              </CardContent>
            </Box>
          ) : (
            <></>
          )
        }
   
      </Box>

        {option === "follow_ups" ? (
          <>
          <Card sx={{ m: 2, justifyContent: "center", display: "flex" }}>
            <h1>Follow Ups</h1>
            </Card>
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
        
        <Card sx={{ m: 2, justifyContent: "center", display: "flex" }}>
            <h1>Paws</h1>
            </Card>
            {
              like ? (
                like.map((mascota, index) => {
                  if (mascota.isActive) {
                    return <FollowUpCard key={index} pet={mascota._followUp} />;
                  }
                })
              ) : (
                <></>
              )
            }
          </>
        ) : (
          <>
            <h1>Error, intente más tarde.</h1>
          </>
        )}
    </Container>
  );
}
