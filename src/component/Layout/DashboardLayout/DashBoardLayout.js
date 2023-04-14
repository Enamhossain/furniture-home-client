import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import  '../DashboardLayout/Dashboard.css'

const DashBoardLayout = () => {




    return (
        <div>
           <Navbar></Navbar>
           <div className="flex justify-end h-full">
        <input className="hidden" aria-hidden="true" checked="checked" type="checkbox" name="" id="sidebar-toggle"/>
        <aside className="sidebar hidden md:block">
            <div className="bg-white">
            <h1 className="brand">
                <span className="brand-icon">😊</span>
                <span className="brand-name">Dashboard</span>
            </h1>
            <nav>
                <ul className="select-none">
                    <li>
                        <a href="/" className="nav-item nav-item-active">
                            <span className="nav-item-icon">🏠</span>
                            <span className="nav-item-name">My order</span>
                        </a>
                    </li>
                    <li>
                        <label for="nav-toggle-sleep" className="nav-item cursor-pointer">
                            <span className="nav-item-icon">🥱</span>
                            <span className="nav-item-name">Sleepy</span>
                        </label>
                        <input type="checkbox" name="" className="subnav-toggle" id="nav-toggle-sleep"/>
                        <span className="hidden bg-gray-100">
                            <a href="/" className="nav-sub-item">Get Ready</a>
                            <a href="/" className="nav-sub-item">After sleep</a>
                        </span>
                    </li>
                </ul>
            </nav>
            </div>
        </aside>
        <main className="content">
           
               
        </main>
    </div>

        </div>
    );
};

export default DashBoardLayout;