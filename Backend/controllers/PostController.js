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
        select: "_imgUsuario",
        populate: {
          path: "_imgUsuario",
          select: "archivo",
        },
      });

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
      .sort({ _id: -1 })
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

exports.post_Search = async (req, res) => {
  try {
    const { body } = req;
    let data;
    if (
      body.name === "" &&
      body.isDog === "" &&
      body.isMale === "" &&
      body.size === ""
    ) {
      data = await Post.find({
        isActive: true,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isDog === "" && body.isMale === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        name: new RegExp(body.name, "i"),
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isMale === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        isDog: body.isDog,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isDog === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        isMale: body.isMale,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isDog === "" && body.isMale === "") {
      data = await Post.find({
        isActive: true,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isMale === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        name: new RegExp(body.name, "i"),
        isDog: body.isDog,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isDog === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        name: new RegExp(body.name, "i"),
        isMale: body.isMale,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isDog === "" && body.isMale === "") {
      data = await Post.find({
        isActive: true,
        name: new RegExp(body.name, "i"),
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.size === "") {
      data = await Post.find({
        isActive: true,
        isMale: body.isMale,
        isDog: body.isDog,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isMale === "") {
      data = await Post.find({
        isActive: true,
        isDog: body.isDog,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "" && body.isDog === "") {
      data = await Post.find({
        isActive: true,
        isMale: body.isMale,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.size === "") {
      data = await Post.find({
        isActive: true,
        name: new RegExp(body.name, "i"),
        isMale: body.isMale,
        isDog: body.isDog,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.isMale === "") {
      data = await Post.find({
        isActive: true,
        name: new RegExp(body.name, "i"),
        isDog: body.isDog,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else if (body.name === "") {
      data = await Post.find({
        isActive: true,
        isMale: body.isMale,
        isDog: body.isDog,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    } else {
      data = await Post.find({
        isActive: true,
        name: new RegExp(body.name, "i"),
        isMale: body.isMale,
        isDog: body.isDog,
        size: body.size,
      })
        .sort({ _id: -1 })
        .populate({ path: "_imgPost", select: "archivo" })
        .populate({
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        });
    }

    res.send(data);
  } catch (err) {
    res.send({ message: "No se encontró nada en la busqueda." });
  }
};
