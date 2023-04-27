
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Page/Authentication/Context/AuthProvider';





const Navber = () => {



 
  
  const { user, singOut } = useContext(AuthContext)
  const handleSingOut = () => {
    singOut()
      .then(() => { })
      .catch(err => console.log(err))
  }
  const navList = <React.Fragment>
    <Link className="text-gray-600 m-4" to='/'>Home</Link>
    <Link className="text-gray-600 m-4" to='/Blog'>Blog</Link>

    {user?.uid ?
      <>
        <Link className="text-gray-600 m-4 text-lg " to='/dashboard'>Dashboard</Link>
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white" onClick={handleSingOut}>SingOut</button>
      </>

      :

      <a href="/"> <Link to="/singin" className="rounded-lg bg-blue-600 px-5 py-2 text-sm  text-white mt-4 ">
        Log in
      </Link></a>}
  </React.Fragment>

  
return (
  
 
  <div className=' '>
  <div className="navbar lg:max-w-screen-2xl mx-auto ">
        <div className="navbar-start">
              <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-white text-neutral-content rounded-box w-52 p-5">
                          {navList}
                          {
                                user?.uid &&
                                <div className='flex items-center lg:mr-6'>
                                      <div className="avatar">
                                            <div className="w-6 rounded-full md:w-8 ">
                                                  <img src={user?.photoURL} alt='' />
                                            </div>
                                      </div>
                                      <p className='ml-2'>{user?.displayName}</p>
                                </div>
                          }
                    </ul>
              </div>
              <div className='flex items-center lg:ml-10'>
                   
                    <Link to='/' className="btn btn-ghost  text-2xl md:text-3xl ">Furniture Home</Link>
              </div>
        </div>
        <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal p-0 lg:mr-10">
                    {navList}
                    {
                          user?.uid &&
                          <div className='flex items-center lg:mr-6'>
                                <div className="avatar">
                                      <div className="w-6 rounded-full md:w-8 lg:w-12 mx-2 ">
                                            <img src={user?.photoURL} alt='' />
                                      </div>
                                </div>
                                <p className='ml-2'>{user?.displayName}</p>
                          </div>
                    }

              </ul>
        </div>
        <label htmlFor="pcbuy-drawer" className="btn btn-ghost navbar-end drawer-button lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>

  </div>
</div>



  );

};

export default Navber;