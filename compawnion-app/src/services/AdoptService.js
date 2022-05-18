import { axiosBase as axios } from "./Config";

export const CreateAdoption = async (data) => {
  try {
    const res = await axios.post("/formato_adopcion", data);

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
