import { axiosBase as axios } from "./Config";

export const GetAllUsers = async () => {
  try {
    const response = await axios.get("/usuario");

    if (response.status === 200) {
      return response.data;
    }
    else {
      return [];
    }
  }
  catch (err) {
    console.log(err);
    return err;
  }
};
