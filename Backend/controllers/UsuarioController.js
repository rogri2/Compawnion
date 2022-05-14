const Usuario = require('../models/UsuarioSchema');
//const WatchList = require('../models/WatchListSchema');

exports.usuario_create = async (req, res) => {
    const { body } = req;
    let newUsuario = new Usuario(body);

    await newUsuario.save()
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

exports.usuario_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const userdb = await Usuario.findById(id);

    if (userdb) {
        const data = await Usuario.findOneAndUpdate( {_id: id}, body, { returnOriginal: false });
        res.send({ message: "Usuario actualizado exitosamente" });
    }
    else {
        res.send({ message: "El usuario que se intentó actualizar no existe"});
    }
};

exports.usuario_delete = async (req, res) => {
    const { id } = req.params;

    const userdb = await Usuario.findById(id);

    if (userdb) {
        // Delete
        await Usuario.findOneAndUpdate({ _id: id }, { isActive: false });
        res.send({ message: "Usuario eliminado exitosamente" });
    }
    else {
        // Error msg
        res.send({ message: "No se encontro el usuario ingresado" });
    }
};

exports.usuario_getById = async (req, res) => {
    const { id } = req.params;

    const data = await Usuario.findById(id).populate('_imagens');

    if (data && data.isActive == true) {
        res.send(data);
    }
    else {
        res.send({ message: "No se encontro el usuario ingresado" });
    }
};