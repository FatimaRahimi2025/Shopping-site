import React, { useEffect } from 'react';
import { getCookie, setCookie } from '../utils/helpers/Cookie';

const Authorize = ({ children}) => {
     useEffect(() => {
        const readCookie = async () => {
            const result = await getCookie("credential");
            console.log(result);
        };
        readCookie();

     }, []);
     return <>{ children }</>
};

 const Providers = ({ children }) => {
  return <Authorize>{children}</Authorize>
};
export default Providers;