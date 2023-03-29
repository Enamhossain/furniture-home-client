import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Singin from "../../Page/Authentication/Singin/Singin";
import SingUp from "../../Page/Authentication/Singup/SingUp";
import Furniture from "../../Page/Home/Furniture/Furniture";
import Home from "../../Page/Home/Home";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
          {
            path:'/',
            element:<Home/>,
          },
          {
            path:'/singin',
            element:<Singin/>,
          },
          {
            path:'/singup',
            element:<SingUp/>,
          },
          {
            path: '/category/:id',
            element: <Furniture/>,
            loader: ({ params }) => fetch(`http://localhost:4000/products/${params.id}`)
      }

         

        ]
    

       

    },
   
])