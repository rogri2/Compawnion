const FormatoAdopcion = require("../models/FormatoAdopcionSchema");

exports.formato_adopcion_create = async (req, res) => {
  try {
    const { body } = req;

    let newFormatoAdopcion = new FormatoAdopcion(body);
    await newFormatoAdopcion
      .save()
      .then((newObject) => {
        console.log("Success!", newObject);
        res.send(newObject);
      })
      .catch((err) => {
        console.error("Error!", err);
        res.send({ message: "No se creo la adopcion " });
      });
  } catch (err) {
    res.send({ message: "No se creo la adopcion " });
  }
};

exports.formato_adopcion_update = async (req, res) => {
  try {
    const { solicitudId } = req.params;
    const { body } = req;
  
    const formato_adopciondb = await FormatoAdopcion.findById(solicitudId);
  
    if (formato_adopciondb) {
      const data = await FormatoAdopcion.findOneAndUpdate(
        { _id: solicitudId },
        body,
        { returnOriginal: false }
      );
  
      if (data) {
        res.send(data);
      } else {
        res.send({ message: "No se pudo actualizar la solicitud." });
      }
    } else {
      res.send({ message: "No se pudo encontrar la solicitud." });
    }
  }
  catch (err) {
    res.send({ message: "No se pudo actualizar la solicitud." });
  }
};

exports.formato_adopcion_delete = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const formato_adopciondb = await FormatoAdopcion.find({
    _post: body._post,
    _usuario: body._usuario,
  });

  if (formato_adopciondb) {
    // Delete
    const data = await FormatoAdopcion.findOneAndUpdate(
      { _id: formato_adopciondb._id },
      { isActive: false },
      { returnOriginal: false }
    );
    res.send({ message: "Comentario eliminado exitosamente" });
  } else {
    // Error msg
    res.send({ message: "No se encontro el comentario ingresado" });
  }
};

exports.formato_adopcion_getById = async (req, res) => {
  const { id } = req.params;

  const data = await FormatoAdopcion.findById(id); //.populate('_students');

  if (data && data.isActive == true) {
    res.send(data);
  } else {
    res.send({ message: "No se encontro el post ingresado" });
  }
};

exports.formato_adopcion_getAll = async (req, res) => {
  try {
    const data = await FormatoAdopcion.find({
      isApproved: false,
      isActive: true,
    })
      .sort({ _id: -1 })
      .populate({
        path: "_usuario",
        select: "name",
      })
      .populate({
        path: "_post",
        select: ["name", "isAdopted"],
      });

    if (data) {
      res.send(data);
    } else {
      res.send({ message: "No hay solicitudes de adopciones." });
    }
  } catch (err) {
    res.send({ message: "No hay solicitudes de adopciones." });
  }
};
