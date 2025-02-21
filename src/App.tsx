import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // ✅ Ensure AuthProvider is imported
import AppRoutes from "./router/routes";

function App() {
    return (
        <AuthProvider> {/* ✅ Wrap everything inside AuthProvider */}
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

