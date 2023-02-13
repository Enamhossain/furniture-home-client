import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home";
import Store from "../../Page/Store/Category/Store";

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

        ]

       

    },

])