import { useAuth } from "../hooks/useAuth";
import UsersTable from "../components/user/UsersTable";

const Users = () => {
    const { user } = useAuth();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            {user?.permissions.includes("CAN_READ_USERS") ? (
                <UsersTable />
            ) : (
                <p className="text-red-500">You do not have permission to view users.</p>
            )}
        </div>
    );
};

export default Users;
