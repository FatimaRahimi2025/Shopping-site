import React, { useEffect } from 'react';
import {useStore } from './Store';

function App() {
  const { access_token, refresh_token} = useStore();

  return (
    <div className=''>
      access_token: {access_token ? access_token: "no access token is set!"}
      <br />
      access_token: {refresh_token ? refresh_token: "no refresh token is set!"}
    </div>
  )
};

export default App;