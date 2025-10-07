import React, { useEffect } from 'react'
import { getCookie } from './utils/helpers/Cookie'

function App() {

  useEffect(() => {
    const readCookie= async () => {
      const result = await getCookie("credential");
      console.log(result);
    };

  readCookie();

  },[]);

  return (
    <div className='bg-red-500 text-center'>App</div>
  )
}

export default App;