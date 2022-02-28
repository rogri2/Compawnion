const Post = require('../models/PostsSchema');

exports.post_create = async (req, res) => {
    const { body } = req;
    let newPost = new Post(body);

    await newPost.save()
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

exports.post_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const postdb = await Post.findById(id);

    if (postdb) {
        const data = await Post.findOneAndUpdate( {_id: id}, body, { returnOriginal: false });
        res.send({ message: "El post se actualizado exitosamente" });
    }
    else {
        res.send({ message: "El post que se intentó actualizar no existe"});
    }
};

exports.post_delete = async (req, res) => {
    const { id } = req.params;

    const postdb = await Usuario.findById(id);

    if (postdb) {
        // Delete
        await Post.findOneAndUpdate({ _id: id }, { isActive: false });
        res.send({ message: "Post eliminado exitosamente" });
    }
    else {
        // Error msg
        res.send({ message: "No se encontro el post ingresado" });
    }
};

exports.post_getById = async (req, res) => {
    const { id } = req.params;

    const data = await Post.findById(id)//.populate('_students');

    if (data && data.isActive == true) {
        res.send(data);
    }
    else {
        res.send({ message: "No se encontro el post ingresado" });
    }
};

exports.post_getAll = async (req, res) => {
    // Para regresar varios, en el School.find() agregar un objeto como parámetro
    const data = await Post.find({ isActive: true });

    res.send(data);
};

exports.post_getAllUser = async (req, res) => {
    const { id } = req.params;
    const data = await Post.find({ isActive: true, _usuario: id })

    res.send(data);
};