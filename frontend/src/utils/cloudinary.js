import axios from "axios";

const getSignature = async () => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/cloudinary/signature`
  );
  return res.data;
};

export const uploadSignedImage = async (file) => {
  const { signature, timestamp, apiKey, cloudName, folder } =
    await getSignature();

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", apiKey);
  formData.append("timestamp", timestamp);
  formData.append("signature", signature);
  formData.append("folder", folder);

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    formData
  );

  return res.data.secure_url;
};
