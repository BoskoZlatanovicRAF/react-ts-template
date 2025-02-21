import { useState, useEffect } from "react";
import { fetchUsers } from "@/api/users.ts";
import { useAuth } from "@/hooks/useAuth.ts"; // ✅ Use auth hook
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const UsersTable = () => {
    const { token } = useAuth(); // ✅ Get token from context
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (token) {
            fetchUsers(token).then(setUsers);
        }
    }, [token]);

    return (
        <Card className="w-full">
            <CardContent>
                <h2 className="text-xl font-bold mb-4">Users & Permissions</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Email</TableHead>
                            <TableHead>Permissions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.email}</TableCell>
                                {/* ✅ Fix: Extract and display permission types */}
                                <TableCell>
                                    {user.permissions.map((perm: { type: string }) => perm.type).join(", ")}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default UsersTable;
