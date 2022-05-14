import { axiosBase as axios } from "./Config";

export const GetById = async (id) => {
  try {
    const response = await axios.get(`/imagen/${id}`);
    if (response === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const CreateImage = async (image) => {
  try {
    let data = new FormData();
    data.set(
      "archivo",
      image.archivo,
      `${image.archivo.lastModified}-${image.archivo.name}`
    );

    const response = axios.post("/imagen", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response: ", response);
  } catch (err) {
    console.log(err);
    //return err;
  }
};
