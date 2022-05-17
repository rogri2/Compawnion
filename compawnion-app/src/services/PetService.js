import { axiosBase as axios } from "./Config";

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