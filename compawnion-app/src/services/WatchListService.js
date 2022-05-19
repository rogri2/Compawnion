import { axiosBase as axios } from "./Config";

export const UpdateBookmarks = async (id, data) => {
  try {
    const res = await axios.put(`/watch_list/${id}`, data);

    console.log("service: ", res);

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

export const GetBookmark = async (id) => {
  try {
    const res = await axios.get(`/watch_list/${id}`);

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

export const GetPostsFromBookmark = async (id) => {
    try {
        const res = await axios.get(`/watch_list/arreglo/${id}`);

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