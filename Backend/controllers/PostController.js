const Post = require("../models/PostsSchema");

exports.post_create = async (req, res) => {
  try {
    const { body } = req;
    let newPost = new Post(body);

    await newPost
      .save()
      .then((newObject) => {
        console.log("Success!", newObject);
        res.send(newObject);
      })
      .catch((err) => {
        console.error("Error!", err);
        res.send({ message: "No se pudo crear el post." });
      });
  } catch (err) {
    res.send({ message: "No se pudo crear el post." });
  }
};

exports.post_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const postdb = await Post.findById(id);

  if (postdb) {
    const data = await Post.findOneAndUpdate({ _id: id }, body, {
      returnOriginal: false,
    });
    res.send({ message: "El post se actualizado exitosamente" });
  } else {
    res.send({ message: "El post que se intentó actualizar no existe" });
  }
};

exports.post_delete = async (req, res) => {
  const { id } = req.params;

  const postdb = await Usuario.findById(id);

  if (postdb) {
    // Delete
    await Post.findOneAndUpdate({ _id: id }, { isActive: false });
    res.send({ message: "Post eliminado exitosamente" });
  } else {
    // Error msg
    res.send({ message: "No se encontro el post ingresado" });
  }
};

exports.post_getById = async (req, res) => {
  try {
    const { postId } = req.params;

    const data = await Post.findById(postId)
      .populate({ path: "_imgPost", select: "archivo" })
      .populate({
        path: "_usuario",
        populate: {
          path: "_imgUsuario",
          select: "archivo",
        },
        select: "_imgUsuario",
      }); //.populate('_students');

    if (data && data.isActive == true) {
      res.send(data);
    } else {
      res.send({ message: "No se encontro el post ingresado" });
    }
  } catch (err) {
    res.send({ message: "No se encontro el post ingresado" });
  }
};

exports.post_getAll = async (req, res) => {
  try {
    const data = await Post.find({ isActive: true })
      .populate({ path: "_imgPost", select: "archivo" })
      .populate({
        path: "_usuario",
        populate: {
          path: "_imgUsuario",
          select: "archivo",
        },
        select: "_imgUsuario",
      });
    if (data) {
      res.send(data);
    } else {
      res.send({ message: "No hay posts" });
    }
  } catch (err) {
    res.send({ message: "No hay posts" });
  }
};

exports.post_getAllUser = async (req, res) => {
  const { id } = req.params;
  const data = await Post.find({ isActive: true, _usuario: id });

  res.send(data);
};
