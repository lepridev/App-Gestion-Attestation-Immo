import axios from "axios";

export const createEnregistrement = async (url: string, data: any) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error: any) {
    console.error("API POST Error:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getAllData = async (url: any) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error: any) {
    console.error("API POST Error:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};
