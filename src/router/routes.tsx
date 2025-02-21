import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import Users from "../pages/Users";
import React, { Suspense } from "react";

// Lazy-loaded pages
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="/login" element={<Login />} />

            <Route
                path="/users"
                element={
                    <ProtectedRoute requiredRole="CAN_READ_USERS">
                        <Users />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute requiredRole="CAN_READ_USERS">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Dashboard />
                        </Suspense>
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;


