import React, { useEffect } from 'react';
import { useStore } from 'zustand';

function App() {
  const { access_token} = useStore();

  return (
    <div className=''>
   
      access_token
    </div>
  )
};

export default App;