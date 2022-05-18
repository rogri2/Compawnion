import React, { useState } from "react";
import PendingTable from "../components/PendingTable";
import { Container } from "@mui/material";

export default function PendingAdoptions() {
  const localUser = JSON.parse(localStorage.getItem("usuario"));
  const [userData, setUserData] = useState(localUser);

  return userData === null ? (
    <h1>Panel para administrador.</h1>
  ) : userData.isAdmin === false ? (
    <h1>Panel para administrador.</h1>
  ) : (
    <Container sx={{ marginTop: "5vh" }}>
      <PendingTable />
    </Container>
  );
}
