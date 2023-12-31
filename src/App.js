// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { router } from './component/Routes/Routes/Router';


function App() {
 

 
  return (
    
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>



    
  );
}

export default App;
