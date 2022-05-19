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

export const GetAdoption = async () => {
  try {
    const res = await axios.get("/formato_adopcion");

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

export const UpdateAdoption = async (id) => {
  try {
    const res = await axios.delete(`/formato_adopcion/${id}`);

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

export const GetAllAdoptionsOfUser = async (id) => {
  try {
    const res = await axios.get(`/formato_adopcion/usuario/${id}`);

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
}