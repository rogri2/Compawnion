import { axiosBase as axios } from "./Config";

export const UpsertLike = async (data) => {
  try {
    const res = await axios.put("/like", data);

    if (res) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const GetLikesFromUser = async (data) => {
  try {
    const dataToSend = {
        _usuario: data
    }

    const res = await axios.post("/like/usuario", dataToSend);

    if (res) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
