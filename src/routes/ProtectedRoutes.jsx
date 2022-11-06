import { Navigate } from "react-router-dom";
import { Eart } from "../context/EartContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = Eart();
  
  if (!user) {
    return <Navigate to={'/home'} />
  } return children;
};

export default ProtectedRoutes;
