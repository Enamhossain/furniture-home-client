import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Singin from "../../Page/Authentication/Singin/Singin";
import SingUp from "../../Page/Authentication/Singup/SingUp";
import Furniture from "../../Page/Home/Furniture/Furniture";
import Home from "../../Page/Home/Home";
import Blog from "../../Page/Home/Blog/Blog";
import DashBoardLayout from "../../Layout/DashboardLayout/DashBoardLayout";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import Dashboard from "../../Page/Dashboard/Dashboard";
import AllUsers from "../../Page/Dashboard/AllUsers";
import AlllSeller from "../../Page/Dashboard/AlllSeller";
import AllBuyers from "../../Page/Dashboard/AllBuyers";
import AddaProduct from "../../Page/Dashboard/AddaProduct";
import MyProduct from "../../Page/Dashboard/MyProduct";
import MyOrder from "../../Page/Dashboard/MyOrder";
import Adminroute from "../AdminRoute/Adminroute";
import Privateroute from "../Privateroute/Privateroute";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/singin',
        element: <Singin />,
      },
      {
        path: '/Blog',
        element: <Blog />,
      },
      {
        path: '/singup',
        element: <SingUp />,
      },
      {
        path: '/category/:id',
        element: <Privateroute> <Furniture /> </Privateroute> ,
        loader: ({ params }) => fetch(`http://localhost:4000/products/${params.id}`)
      }



    ]




  },


  {
    path:'/dashboard',
    element: <DashBoardLayout/> ,
    errorElement: <DisplayError></DisplayError>,
    children: [
          {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
          },
          {
                path: '/dashboard/allusers',
                element: <Adminroute> <AllUsers></AllUsers>  </Adminroute> 
          },
          {
                path: '/dashboard/allseller',
                element: <AlllSeller></AlllSeller>
          },
          {
                path: '/dashboard/allbuyer',
                element:<Adminroute> <AllBuyers></AllBuyers>  </Adminroute> 
          },
          {
                path: '/dashboard/addproduct',
                element: <AddaProduct></AddaProduct>
          },
          {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
          },
          {
                path: '/dashboard/myorders',
                element: <MyOrder></MyOrder>
          },
    ]
}

])