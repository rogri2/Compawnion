const Imagen = require('../models/ImagenSchema');

exports.imagen_create = async (req, res) => {
    const { body } = req;
    let newImagen = new Imagen(body);

    await newImagen.save()
    .then((newObject) => {
        /*let newWatchList = new WatchList(newUsuario._id);
        await newWatchList.save()
        .then(() => {
            console.log("Se creo la watchlist");
        })
        .catch((err) => {
            console.error("Error!", err);
            res.send(err.errors);
        });*/
        console.log("Success!", newObject);
    })
    .catch((err) => {
        console.error("Error!", err);
        res.send(err.errors);
    });
};

exports.imagen_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const imagendb = await Imagen.findById(id);

    if (imagendb) {
        const data = await Imagen.findOneAndUpdate( {_id: id}, body, { returnOriginal: false });
        res.send({ message: "Imagen actualizado exitosamente" });
    }
    else {
        res.send({ message: "La imagen que se intentó actualizar no existe"});
    }
};

exports.imagen_getById = async (req, res) => {
    const { id } = req.params;

    const data = await Imagen.findById(id)//.populate('_students');

    if (data && data.isActive == true) {
        res.send(data);
    }
    else {
        res.send({ message: "No se encontro la imagen ingresado" });
    }
};