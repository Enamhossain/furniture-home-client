import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home";
import Singin from "../../Page/Sing-in/Singin";
import SingUp from "../../Page/Singup/SingUp";
import Store from "../../Page/Store/Store";

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
            path:'/store',
            element:<Store/>,
          },
          {
            path:'/singin',
            element:<Singin/>,
          },
          {
            path:'/singup',
            element:<SingUp/>
          }

        ]

       

    },

])