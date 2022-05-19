import React, { Fragment, useState, useEffect } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
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

export default function SolicitudModal(props) {
  const solicitud = props.solicitud;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <IconButton onClick={handleOpen}>
        <FilterListIcon />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h5">{solicitud.fullName}</Typography>
          <Typography variant="body" align="center">
            {solicitud.correo}
          </Typography>
          <br />
          <Typography variant="body" align="center">
            {solicitud.telefono}
          </Typography>
          <br />
          <Typography variant="body" align="center">
            {solicitud.direccion}
          </Typography>
          <br />
          <Typography variant="h6" sx={{ m: 1 }}>
            {solicitud.texto}
          </Typography>
        </Box>
      </Modal>
    </Fragment>
  );
}
