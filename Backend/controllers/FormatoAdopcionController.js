const FormatoAdopcion = require('../models/FormatoAdopcionSchema');

exports.formato_adopcion_create = async (req, res) => {
    const { body } = req;
    let newFormatoAdopcion = new FormatoAdopcion(body);

    await newFormatoAdopcion.save()
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

exports.formato_adopcion_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const formato_adopciondb = await FormatoAdopcion.find({ _post: body._post, _usuario: body._usuario });

    if (formato_adopciondb) {
        const data = await FormatoAdopcion.findOneAndUpdate({ _id: formato_adopciondb._id },
            {
                fullName: body.fullName,
                correo: body.correo,
                telefono: body.telefono,
                direccion: body.direccion,
                texto: body.texto
            },
            { returnOriginal: false });
        res.send({ message: "El comentario se actualizado exitosamente" });
    }
    else {
        res.send({ message: "El comentario que se intentó actualizar no existe"});
    }
};

exports.formato_adopcion_delete = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const formato_adopciondb = await FormatoAdopcion.find({ _post: body._post, _usuario: body._usuario });

    if (formato_adopciondb) {
        // Delete
        const data = await FormatoAdopcion.findOneAndUpdate({ _id: formato_adopciondb._id }, { isActive: false }, { returnOriginal: false });
        res.send({ message: "Comentario eliminado exitosamente" });
    }
    else {
        // Error msg
        res.send({ message: "No se encontro el comentario ingresado" });
    }
};

exports.formato_adopcion_getById = async (req, res) => {
    const { id } = req.params;

    const data = await FormatoAdopcion.findById(id)//.populate('_students');

    if (data && data.isActive == true) {
        res.send(data);
    }
    else {
        res.send({ message: "No se encontro el post ingresado" });
    }
};

exports.formato_adopcion_getAll = async (req, res) => {
    // Para regresar varios, en el School.find() agregar un objeto como parámetro
    const data = await FormatoAdopcion.find({ isAdopted: false, isActive: true });

    res.send(data);
};