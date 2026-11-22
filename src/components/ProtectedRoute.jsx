import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, loading, children}) => {
    if(loading){ // We're still checking the /auth/me 
        return <div>Checking authentication...</div>
    }

    if(!user){ // The users isn't authenticated, so redirected to login
        return <Navigate to="/login" replace/>
    }
    
    return children
}

export default ProtectedRoute