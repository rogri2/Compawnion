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

import { GetAdoption } from "../services/AdoptService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AdoptionTable() {
  const [adoptions, setAdoptions] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

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

  const handleAceptar = (e) => {
    alert("Codigo para aceptar la solicitud.");
  };

  const handleDenegar = (e) => {
    alert("Codigo para denegar la solicitud.");
  };

  return adoptions ? (
    <Card>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>Solicitante</b></TableCell>
              <TableCell align="center"><b>Mascota</b></TableCell>
              <TableCell align="center"><b>Solicitud</b></TableCell>
              <TableCell align="center"><b>Decisión</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adoptions.map((adoption, index) => {
              return (
                  <TableRow key={index}>
                    <TableCell align="center">
                      {adoption._usuario.name}
                    </TableCell>
                    <TableCell align="center">{adoption._post.name}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={handleOpen}>
                        <FilterListIcon/>
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={handleAceptar}>
                        <CheckIcon />
                      </IconButton>
                      <IconButton onClick={handleDenegar}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography variant="h5">{adoption.fullName}</Typography>
                        <Typography variant="body" align="center">{adoption.correo}</Typography>
                        <br/>
                        <Typography variant="body"  align="center">{adoption.telefono}</Typography>
                        <br/>
                        <Typography variant="body"  align="center">{adoption.direccion}</Typography>
                        <br/>
                        <Typography variant="h6" sx={{m:1}}>{adoption.texto}</Typography>
                      </Box>
                    </Modal>
                  </TableRow>
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
