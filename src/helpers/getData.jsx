import axios from "axios";

const options = {
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "a065931112mshade584e262c4e55p1d526bjsn1efa31a216d9",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
};

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async (path) => {
  try {
    return await axios.get(path, options);
  } catch (err) {
    console.log("Verileri çekerken hata oluştu");
  }
};
