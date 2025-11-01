import apiClient from "../Constants/axios-interceptorjs";

 export const getProductsApi = async () => {
  try {
    return await apiClient.get("/src/productsx");
  }catch (error) {
    return error;
  }
 };

 export default getProductsApi;