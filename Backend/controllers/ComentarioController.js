const Comentario = require('../models/ComentarioSchema');

exports.comentario_create = async (req, res) => {
    const { body } = req;
    let newComentario = new Comentario(body);

    await newComentario.save()
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

exports.comentario_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const comentariodb = await Comentario.findById(id);

    if (comentariodb && comentariodb._usuario == body.usuario) {
        const data = await Comentario.findOneAndUpdate({ _id: id }, { texto: body.texto }, { returnOriginal: false });
        res.send({ message: "El comentario se actualizado exitosamente" });
    }
    else {
        res.send({ message: "El comentario que se intentó actualizar no existe"});
    }
};

exports.comentario_delete = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const comentariodb = await Comentario.findById(id);

    if (comentariodb && comentariodb._usuario == body._usuario) {
        // Delete
        await Comentario.findOneAndUpdate({ _id: id }, { isActive: false });
        res.send({ message: "Comentario eliminado exitosamente" });
    }
    else {
        // Error msg
        res.send({ message: "No se encontro el comentario ingresado" });
    }
};

exports.comentario_getById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Comentario.findById(id)//.populate('_students');

    if (data && data.isActive == true && data._usuario == body) {
        res.send(data);
    }
    else {
        res.send({ message: "No se encontro el comentario ingresado" });
    }
};

exports.comentario_getAll = async (req, res) => {
    const { post } = req.params; 
    const data = await Comentario.find({ _post: post, isActive: true });

    res.send(data);
};