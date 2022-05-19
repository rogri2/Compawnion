import { axiosBase as axios } from "./Config";

export const GetAllPosts = async () => {
  try {
    const response = await axios.get("/post");

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

export const GetPostById = async (id) => {
  try {
    const response = await axios.get(`/post/${id}`);

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

export const CreatePost = async (data) => {
  try {
    let petData;
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
        petData = {
          name: data.name,
          isDog: data.isDog,
          isMale: data.isMale,
          size: data.size,
          description: data.description,
          date: data.date,
          _imgPost: response.data._id,
          _usuario: data.user,
        };
      });

    const res = await axios.post("/post", petData);

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

export const SearchPost = async (data) => {
  try {
    const response = await axios.post("/search", data);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  }
  catch (err) {
    console.log(err);
    return err;
  }
};

export const AdoptPet = async (petId, petData, adoptId, adoptData) => {
  try {
    await axios.put(`/post/${petId}`, petData);

    const res = await axios.put(`/formato_adopcion/${adoptId}`, adoptData);

    if (res.status === 200) {
      return res.data;
    }
    else {
      return null;
    }
  }
  catch (err) {
    console.log(err);
    return err;
  }
};