import apiClient from "../../../Constants/axios-interceptorjs";

export const refreshTokenApi = async (data) => {
    try {
        return await apiClient.post("/auth/refresh_token", data);
    } catch(error) {
        return error;
    }
};

export default refreshTokenApi;