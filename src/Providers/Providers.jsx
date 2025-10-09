import React, { useEffect } from 'react'
import { getCookie, setCookie } from '../utils/helpers/Cookie';

const Authorize = () => {
     useEffect(() => {
        const readCookie = async () => {
            const result = await getCookie("credential");
            console.log(result);
        };
        readCookie();

     }, []);
}
 const Providers = ({ children }) => {
  return <Authorize>{children}</Authorize>
}
export default Providers;