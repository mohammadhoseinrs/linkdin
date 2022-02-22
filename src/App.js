import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import {routes} from './routes';

import { useNavigate } from 'react-router-dom';

function App() {

  const router=useRoutes(routes)

  return (
<>
    
  
<div className=''>
    <div className=' bg-white border sticky top-0 z-50'  >
      
      
    </div>
    
        {router}
      
    </div>
      
    
 </>   
  );
}

export default App;
