import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../Page/Authentication/Context/AuthProvider";

const Privateroute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    

    if (user){
        return children;
    }

    return <Navigate to="/singin" state={{from: location}} replace></Navigate>;
};

export default Privateroute;