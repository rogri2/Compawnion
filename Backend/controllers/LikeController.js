const Like = require('../models/LikeSchema');

exports.like_create = async (req, res) => {
    const { body } = req;
    let newLike = new Like(body);

    await newLike.save()
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

exports.like_update = async (req, res) => {
    const { body } = req;

    const likedb = await Like.find({ _post: body._post, _usuario: body._usuario });

    if (likedb) {
        const data = await Like.findOneAndUpdate({ _id: likedb._id }, { isActive: !isActive }, { returnOriginal: false });
        res.send({ message: "El like se actualizado exitosamente" });
    }
    else {
        res.send({ message: "El like que se intentó actualizar no existe" });
    }
};

exports.like_getAll = async (req, res) => {
    const { id } = req.params; 
    const data = await Like.find({ _post: id, isActive: true });

    res.send(data);
};