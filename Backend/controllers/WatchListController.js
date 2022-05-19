const { populate } = require("../models/WatchListSchema");
const WatchList = require("../models/WatchListSchema");

exports.watch_list_create = async (req, res) => {
  try {
    const { body } = req;
    let newWatchList = new WatchList(body);

    await newWatchList
      .save()
      .then((newObject) => {
        console.log("Success!", newObject);
        res.send(newObject);
      })
      .catch((err) => {
        console.error("Error!", err);
        res.send({ message: "No se creo la watchlist." });
      });
  } catch (err) {
    res.send({ message: "No se creo la watchlist." });
  }
};

exports.watch_list_update = async (req, res) => {
  try {
    const { bookmarkId } = req.params;
    const { body } = req;
    let wlData = {
      _posts: body,
    };
    console.log("wlData", wlData);
    console.log("bookmarkId", bookmarkId);
    const data = await WatchList.findByIdAndUpdate(bookmarkId, wlData, {
      returnOriginal: false,
    });
    if (data) {
      console.log("data", data);
      res.send(data);
    } else {
      res.send({ message: "Error al actualizar la watchlist" });
    }
  } catch (err) {
    res.send({ message: "Hubo un error al actualizar la watchlist." });
  }
};

exports.watch_list_delete = async (req, res) => {
  const { id } = req.params;

  const watch_listdb = await WatchList.findById(id);

  if (watch_listdb) {
    // Delete
    await WatchList.findOneAndUpdate({ _id: id }, { isActive: false });
    res.send({ message: "Usuario eliminado exitosamente" });
  } else {
    // Error msg
    res.send({ message: "No se encontro el usuario ingresado" });
  }
};

exports.watch_list_getById = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await WatchList.findOne({ _usuario: userId });

    if (data) {
      res.send(data);
    } else {
      res.send({ message: "No se encontro el usuario ingresado" });
    }
  } catch (err) {
    res.send({ message: "No se encontro el usuario ingresado" });
  }
};

exports.watch_list_getFullById = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await WatchList.findOne({ _usuario: userId }).populate({
      path: "_posts",
      populate: [
        {
          path: "_usuario",
          select: "_imgUsuario",
          populate: {
            path: "_imgUsuario",
            select: "archivo",
          },
        },
        {
          path: "_imgPost",
          select: "archivo",
        },
      ],
    });

    if (data) {
      res.send(data);
    } else {
      res.send({ message: "Hubo un error." });
    }
  } catch (err) {
    res.send({ message: "Hubo un error." });
  }
};
