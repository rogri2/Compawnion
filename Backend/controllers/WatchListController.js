const WatchList = require('../models/WatchListSchema');

exports.watch_list_create = async (req, res) => {
    const { body } = req;
    let newWatchList = new WatchList(body);

    await newWatchList.save()
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

exports.watch_list_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const watch_listdb = await WatchList.findById(id);

    if (watch_listdb) {
        const data = await WatchList.findOneAndUpdate( {_id: id}, body, { returnOriginal: false });
        res.send({ message: "Usuario actualizado exitosamente" });
    }
    else {
        res.send({ message: "El usuario que se intentó actualizar no existe"});
    }
};

exports.watch_list_delete = async (req, res) => {
    const { id } = req.params;

    const watch_listdb = await WatchList.findById(id);

    if (watch_listdb) {
        // Delete
        await WatchList.findOneAndUpdate({ _id: id }, { isActive: false });
        res.send({ message: "Usuario eliminado exitosamente" });
    }
    else {
        // Error msg
        res.send({ message: "No se encontro el usuario ingresado" });
    }
};

exports.watch_list_getById = async (req, res) => {
    const { id } = req.params;

    const data = await WatchList.findById(id)//.populate('_students');

    if (data && data.isActive == true) {
        res.send(data);
    }
    else {
        res.send({ message: "No se encontro el usuario ingresado" });
    }
};