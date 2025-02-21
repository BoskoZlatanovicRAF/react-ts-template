import api from "./axios";

export const fetchUsers = async (token: string | null) => {
    if (!token) {
        console.error("❌ No token available, request aborted");
        return [];
    }

    try {
        const response = await api.get("/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Assuming the API returns an array of users
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        return [];
    }
};

