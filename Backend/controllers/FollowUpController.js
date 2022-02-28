const FollowUp = require('../models/FollowUpSchema');

exports.follow_up_create = async (req, res) => {
    const { body } = req;
    let newFollowUp = new FollowUp(body);

    await newFollowUp.save()
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

exports.follow_up_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const follow_updb = await FollowUp.findById(id);

    if (follow_updb) {
        const data = await FollowUp.findOneAndUpdate( {_id: id}, body, { returnOriginal: false });
        res.send({ message: "El post se actualizado exitosamente" });
    }
    else {
        res.send({ message: "El post que se intentó actualizar no existe"});
    }
};

exports.follow_up_delete = async (req, res) => {
    const { id } = req.params;

    const follow_updb = await FollowUp.findById(id);

    if (follow_updb) {
        // Delete
        await FollowUp.findOneAndUpdate({ _id: id }, { isActive: false });
        res.send({ message: "Post eliminado exitosamente" });
    }
    else {
        // Error msg
        res.send({ message: "No se encontro el post ingresado" });
    }
};

exports.follow_up_getById = async (req, res) => {
    const { id } = req.params;

    const data = await FollowUp.findById(id)//.populate('_students');

    if (data && data.isActive == true) {
        res.send(data);
    }
    else {
        res.send({ message: "No se encontro el post ingresado" });
    }
};

exports.follow_up_getAll = async (req, res) => {
    // Para regresar varios, en el School.find() agregar un objeto como parámetro
    const data = await FollowUp.find({ isActive: true });

    res.send(data);
};

exports.follow_up_getAllUser = async (req, res) => {
    const { id } = req.params;
    const data = await FollowUp.find({ isActive: true, _usuario: id })

    res.send(data);
};