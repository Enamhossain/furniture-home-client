import React, { useContext } from 'react';
import { AuthContext } from '../../Page/Authentication/Context/AuthProvider';
import { useNavigate, useRouteError } from 'react-router-dom';

const DisplayError = () => {

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const error = useRouteError();
    const handleLogOut = () => {
          logOut()
                .then(() => {
                      navigate('/login')
                })
                .catch(err => console.error(err))
    }

    return (
        <div>
        <p className='text-red-500'>Something went wrong</p>
        <p className='text-red-400'>{error.statusText || error.message}</p>
        <h4 className='text-3xl'>Please <button onClick={handleLogOut}>Sign out</button> and login again</h4>
  </div>
    );
};

export default DisplayError;