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
        loader: ({ params }) => fetch(`https://furnitur-home-server.vercel.app/products/${params.id}`)
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
                element: <Privateroute> <Dashboard></Dashboard> </Privateroute>
          },
          {
                path: '/dashboard/allusers',
                element:<Privateroute> <AllUsers></AllUsers>   </Privateroute>  
          },
          {
                path: '/dashboard/allseller',
                element: <Privateroute> <AlllSeller></AlllSeller> </Privateroute>
          },
          {
                path: '/dashboard/allbuyer',
                element: <Privateroute> <AllBuyers/>  </Privateroute>  
          },
          {
                path: '/dashboard/addproduct',
                element:    <Privateroute> <AddaProduct/> </Privateroute>
          },
          {
                path: '/dashboard/myproduct',
                element:  <Privateroute> <MyProduct/> </Privateroute>
          },
          {
                path: '/dashboard/myorders',
                element: <Privateroute><MyOrder/> </Privateroute> 
          },
    ]
}

])