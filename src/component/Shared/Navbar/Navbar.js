
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Page/Authentication/Context/AuthProvider';

const Navbar = () => {
  const { user, singOut } = useContext(AuthContext)
  const handleSingOut = () => {
    singOut()
      .then(() => { })
      .catch(err => console.log(err))
  }
  const menuItems = <React.Fragment>
    <Link className="text-gray-600" to='/'>Home</Link>
    <Link className="text-gray-600" to='/Blog'>Blog</Link>

    {user?.uid ?
      <>
        <Link className="text-gray-600" to='/dashboard'>Dashboard</Link>
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white" onClick={handleSingOut}>SingOut</button>
      </>

      :

      <a href="/"> <Link to="/singin" className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">
        Log in
      </Link></a>}
  </React.Fragment>

  return (

    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <a href="/">
              <span className="text-bold font-semibold">Furniture-Home</span>

            </a>
          </div>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
                              <ul className=" items-stretch hidden space-x-3 font-semibold  md:flex p-0 lg:mr-10">
                                    {menuItems}
                                    {
                                          user?.uid &&
                                          <div className='flex lg:mr-6'>
                                                <div className="avatar">
                                                      <div className="w-6 rounded-full md:w-8 lg:w-12">
                                                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={user?.photoURL} alt='' />
                                                      </div>
                                                </div>
                                                <p className='m-0 p-0'>{user?.displayName}</p>
                                          </div>
                                    }

                              </ul>
                        </div>

          

          <div className="lg:hidden">
            <button className="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>






  );

};

export default Navbar;