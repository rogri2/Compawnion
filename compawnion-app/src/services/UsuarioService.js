import { axiosBase as axios } from "./Config";

export const GetAllUsers = async () => {
  try {
    const response = await axios.get("/usuario");

    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const CreateUser = async (data) => {
  try {
    let userData;
    let imageData = new FormData();
    imageData.set(
      "archivo",
      data.image,
      `${data.image.lastModified}-${data.image.name}`
    );

    await axios
      .post("/imagen", imageData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        userData = {
          name: data.name,
          user: data.user,
          pass: data.pass,
          _imgUsuario: response.data._id,
        };
      });

    const res = await axios.post("/usuario", userData);

    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const GetById = async (id) => {
  try {
    const response = await axios.get(`/usuario/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const LogInService = async (data) => {
  try {
    const userData = {
      user: data.user,
      pass: data.pass,
    };

    const response = await axios.post("/login", userData);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
