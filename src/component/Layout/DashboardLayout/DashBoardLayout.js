import React, { useContext } from 'react';
import Navber from '../../Shared/Navbar/Navber';
import  '../DashboardLayout/Dashboard.css'

import { Link,Outlet } from 'react-router-dom';
import { AuthContext } from '../../Page/Authentication/Context/AuthProvider';
import useSeller from '../../hooks/useSeller';
import useAdmin from '../../hooks/useAdmin';

const DashBoardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);


    return (
        <div>
           <Navber></Navber>
           <div className="flex justify-end h-full">
        <input className="hidden" aria-hidden="true" checked="checked" type="checkbox" name="" id="sidebar-toggle"/>
        <aside className="sidebar">
            <div className="">
            <h1 className="brand">
                <span className="brand-icon">😊</span>
                <span className="brand-name">Dashboard</span>
            </h1>
            <nav>
                <ul className="select-none">
                <li>
                        <label  for="nav-toggle-sleep" className="nav-item nav-item">
                            
                            <span className="nav-item-name">  <Link to="/dashboard/myorders">My order</Link></span>
                        </label>
                    </li>

                {

                  isAdmin  && <>
                  
                   
                    <li>
                        <label for="nav-toggle-sleep" className="nav-item cursor-pointer">
                            
                            <span className="nav-item-name"> <Link to="/dashboard/allusers"> All Users</Link>  </span>
                        </label>
                    
                    </li>
                    <li>
                        <label for="nav-toggle-sleep" className="nav-item cursor-pointer">
                            
                            <span className="nav-item-name">    <Link to="/dashboard/allseller"> All Seller</Link> </span>
                        </label>
                    
                    </li>
                    <li>
                        <label for="nav-toggle-sleep" className="nav-item cursor-pointer">
                            
                            <span className="nav-item-name"><Link to="/dashboard/allbuyer"> All Buyers </Link> </span>
                        </label>
                    
                    </li>

                    <li>
                        <label for="nav-toggle-sleep" className="nav-item cursor-pointer">
                            
                            <span className="nav-item-name"> <Link to="/dashboard/myproduct">  My Product</Link>   </span>
                        </label>
                    
                    </li>

                    <li>
                        <label for="nav-toggle-sleep" className="nav-item cursor-pointer">
                            
                            <span className="nav-item-name">      <Link to="/dashboard/addproduct">  Add Product </Link>   </span>
                        </label>
                    
                    </li>
                  
                  </>

                }


                {

                isSeller && <>
                
                <li>
                        <label for="nav-toggle-sleep" className="nav-item cursor-pointer">
                            
                            <span className="nav-item-name">  <Link to="/dashboard/myproduct">  My Product</Link>   </span>
                        </label>
                    
                    </li>
                    <li>
                        <label for="nav-toggle-sleep" className="nav-item cursor-pointer">
                            
                            <span className="nav-item-name"><Link to="/dashboard/addproduct">  Add Product </Link> </span>
                        </label>
                    
                    </li>
                </>
                   
                }

                   
                </ul>
            </nav>
            </div>
        </aside>
        <main className="content">
           <Outlet></Outlet>
               
        </main>
    </div>

        </div>
    );
};

export default DashBoardLayout;