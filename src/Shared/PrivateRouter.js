import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRouter = ({children}) => {
     const {user, loading}= useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <h2>loading...</h2>
    }
    if(user){
     return children
    }
    return  <Navigate to={'/login'} state={{from : location}} replace></Navigate>
};

export default PrivateRouter;