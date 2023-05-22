import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Navigate,useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {users,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
       return <h2>loadiing</h2>
    }
    if(users){
        return children
    }
    else{
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }
};

export default PrivateRoute;