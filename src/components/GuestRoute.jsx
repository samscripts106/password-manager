import { Navigate } from "react-router-dom";

const GuestRoute = ({ user, loading, children }) => {
    if(loading){ //wait for authentication check
        return <div> Checking authentication... </div>
    }

    if(user){ // redirect to /vault
        return <Navigate to="/vault" replace/>
    }

    return children
}

export default GuestRoute 