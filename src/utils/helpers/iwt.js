import { SignJWT, jwtVerify } from "jose";
const key = new TextDecoder().encode("this is the secret key");
export const encryptJWt = async (payLoad) => {
    return new SignJWT(payLoad)
    .setProtectedHeader({alg: "Hs256"})
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
};

export const decryptJWT = async (session) => {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ["Hs256"],
        });

    return payload;
    } catch (error){
        return null;
    }
};