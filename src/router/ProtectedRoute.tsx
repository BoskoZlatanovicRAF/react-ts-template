import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ requiredRole, redirectPath = "/login", children }: {
    requiredRole?: string;
    redirectPath?: string;
    children?: React.ReactNode;
}) => {
    const { user, token } = useAuth();

    console.log("🚀 Debug: Checking Protected Route");
    console.log("🔹 Token:", token);
    console.log("🔹 User:", user);
    console.log("🔹 Required Role:", requiredRole);

    if (!token || !user || (requiredRole && !user.permissions.includes(requiredRole))) {
        console.warn("❌ Access Denied - Redirecting to Login");
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
