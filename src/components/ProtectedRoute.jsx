import { useUser } from "@clerk/react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null;

  return isSignedIn ? children : <Navigate to='/' replace />;
}

export default ProtectedRoute
