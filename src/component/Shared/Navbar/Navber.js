
import React, { useContext,useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Page/Authentication/Context/AuthProvider';





const Navber = () => {



      const [open, setOpen] = useState(false);
  
  const { user, singOut } = useContext(AuthContext)
  const handleSingOut = () => {
    singOut()
      .then(() => { })
      .catch(err => console.log(err))
  }
  const navList = <React.Fragment>
    <li>
    <Link className="text-gray-600 py-7 px-3 inline-block " to='/'>Home</Link>

    </li>
  <li>
      
      <Link className="text-gray-600 py-7 px-3 inline-block " to='/Blog'>Blog</Link>
      
      </li>  
      

    {user?.uid ?
      <>
        <li>
        <Link className="text-gray-600 py-7 px-3 inline-block " to='/dashboard'>Dashboard</Link>

        </li>
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white" onClick={handleSingOut}>SingOut</button>
      </>

      :

      <a href="/"> <Link to="/singin" className="rounded-lg bg-blue-600 text-sm py-3 px-3 inline-block text-white  ">
        Log in
      </Link></a> }
  </React.Fragment>

  
return (
  
 
      <nav className="">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
        <Link to='/' className="btn btn-ghost  text-2xl md:text-3xl ">Furniture Home</Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>

          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
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
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
            {navList}
                          {
                                user?.uid &&
                                <div className=' flex items-center mt-5 lg:mr-6'>
                                      <div className="avatar">
                                            <div className="w-6  rounded-full md:w-8 ">
                                                  <img src={user?.photoURL} alt='' />
                                            </div>
                                      </div>
                                      <p className='ml-2'>{user?.displayName}</p>
                                </div>
                          }
         
        </ul>
      </div>
    </nav>



  );

};

export default Navber;