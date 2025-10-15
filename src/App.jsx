import React, { useEffect } from 'react';
import {useStore } from './Store';

function App() {
  const { access_token} = useStore();

  return (
    <div className=''>
   
      access_token
    </div>
  )
};

export default App;