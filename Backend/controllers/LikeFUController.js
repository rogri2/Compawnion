const LikeFU = require('../models/LikeFUShcema');

exports.likeFU_create = async (req, res) => {
    const { body } = req;
    let newLikeFU = new LikeFU(body);

    await newLikeFU.save()
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

exports.likeFU_update = async (req, res) => {
    const { body } = req;

    const likedb = await LikeFU.find({ _post: body._post, _usuario: body._usuario });

    if (likedb) {
        const data = await LikeFU.findOneAndUpdate({ _id: likedb._id }, { isActive: !isActive }, { returnOriginal: false });
        res.send({ message: "El like se actualizado exitosamente" });
    }
    else {
        res.send({ message: "El like que se intentó actualizar no existe" });
    }
};

exports.likeFU_getAll = async (req, res) => {
    const { id } = req.params; 
    const data = await LikeFU.find({ _post: id, isActive: true });

    res.send(data);
};