import React, { useEffect } from 'react'
import { getCookie, setCookie } from '../utils/helpers/Cookie';

const Authorize = () => {
     useEffect(() => {
        const readCookie = async () => {
          setCookie("credential", {
            access_token: "aslkdjasldkjasjklc",
            refresh_token: "alsdjaslkdjalskdm6s54ds",
          })
            // const result = await getCookie("credential");
            // console.log(result);
        };
        readCookie();

     }, []);
}
 const Providers = ({ children }) => {
  return <Authorize>{children}</Authorize>
}
export default Providers;