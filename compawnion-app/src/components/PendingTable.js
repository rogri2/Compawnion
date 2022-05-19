import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
  Button,
  Card,
  Modal,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckIcon from "@mui/icons-material/Check";
import { makeStyles } from "@mui/styles";
import { maxWidth, width } from "@mui/system";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { visuallyHidden } from "@mui/utils";
import SolicitudModal from "./SolicitudModal";

import { GetAdoption, UpdateAdoption } from "../services/AdoptService";
import { AdoptPet } from "../services/PetService";

export default function AdoptionTable() {
  const [adoptions, setAdoptions] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const data = await GetAdoption();
      if (data.message) {
        setAdoptions(null);
      } else {
        setAdoptions(data);
      }
    }
    fetchData();
  }, []);

  const handleAceptar = (e, post, solicitud) => {
    const data = AdoptPet(post, { isAdopted: true }, solicitud, {
      isApproved: true,
    });
    if (data.message) {
      alert("No se pudo procesar la solictud, intente más tarde.");
    } else {
      alert("¡Solicitud aceptada!");
      document.location.href = "/adopciones";
    }
  };

  const handleDenegar = (e, solicitud) => {
    const data = UpdateAdoption(solicitud);

    if (data.message) {
      alert("No se pudo procesar la solictud, intente más tarde.");
    }
    else {
      alert("Solicitud denegada.");
      document.location.href = "/adopciones";
    }
  };

  return adoptions ? (
    <Card>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Solicitante</b>
              </TableCell>
              <TableCell align="center">
                <b>Mascota</b>
              </TableCell>
              <TableCell align="center">
                <b>Solicitud</b>
              </TableCell>
              <TableCell align="center">
                <b>Decisión</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adoptions.map((adoption, index) => {
              return adoption._post.isAdopted === false ? (
                <TableRow key={index}>
                  <TableCell align="center">{adoption._usuario.name}</TableCell>
                  <TableCell align="center">{adoption._post.name}</TableCell>
                  <TableCell align="center">
                    <SolicitudModal solicitud={adoption}/>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={(e) =>
                        handleAceptar(e, adoption._post._id, adoption._id)
                      }
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton onClick={(e) => handleDenegar(e, adoption._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ) : (
                <></>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  ) : (
    <h1>No hay solicitudes pendientes.</h1>
  );
}
