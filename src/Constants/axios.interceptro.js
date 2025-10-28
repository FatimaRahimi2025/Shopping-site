import axios from "axios";
import { getCookie, setCookie } from "../utils/helpers/Cookie";

const getAccessToken = async () => {
    const cookie = await getCookie("credential");
    return cookie?.access_token;
};

const getRefreshToken = async () => {
    const cookie = await getCookie("credential");
    return cookie?.refresh_token;
};

export const apiClient = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
    headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
    },
});



