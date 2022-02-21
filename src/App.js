import { useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import routes from './routes';

function App() {

  const router=useRoutes(routes)
  return (
    <div className=''>
    <div className=' bg-white border sticky top-0 z-50'  >
      
      <Navbar/>
    </div>
    <div className='bg-stone-100 pb-20'>
      <div className='w-4/5 mx-auto pt-6'>
        {router}
      </div>
      
    </div>
    

    </div>
  );
}

export default App;
