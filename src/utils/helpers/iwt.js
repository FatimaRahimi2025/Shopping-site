import { SignJWT, jwtVerify } from "jose";
const key = new TextEncoder().encode("this is the secret key");
export const encryptJWT = async (payLoad) => {
    return new SignJWT(payLoad)
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
};

export const decryptJWT = async (session) => {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ["HS256"],
        });

    return payload;
    } catch (error){
        return null;
    };
};



// import { SignJWT, jwtVerify } from "jose";

// // ایجاد کلید امن از رشته‌ی متنی
// const secret = "this is the secret key";

// // در مرورگر:
// const getKey = async () => {
//   return await crypto.subtle.importKey(
//     "raw",
//     new TextEncoder().encode(secret),
//     { name: "HMAC", hash: "SHA-256" },
//     false,
//     ["sign", "verify"]
//   );
// };

// // توکن‌سازی
// export const encryptJWT = async (payload) => {
//   const key = await getKey();
//   return await new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("1d")
//     .sign(key);
// };

// // دیکد و بررسی توکن
// export const decryptJWT = async (token) => {
//   try {
//     const key = await getKey();
//     const { payload } = await jwtVerify(token, key, {
//       algorithms: ["HS256"],
//     });
//     return payload;
//   } catch (error) {
//     console.error("JWT Verify Error:", error.message);
//     return null;
//   }
// };
