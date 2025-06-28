import { useState, useEffect } from "react";
import { Trash2, Eye, Search } from "lucide-react";
import axios from "axios";
import { Link } from "react-router";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const removeUser = async (userId) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/admin/user/remove/${userId}`
      );
      if (res.data) {
        fetchUsers();
      }
    } catch (error) {
      toast.error(
        error.response?.data || error?.message || "Failed to delete user"
      );
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/admin/allUser`
      );
      setUsers(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users?.filter((user) =>
    user?.personalInfo.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>

      <div className="flex items-center mb-4">
        <Search className="w-5 h-5 mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded-md w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-3 px-4 text-left">Full Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">DOB</th>
              <th className="py-3 px-4 text-left">Gender</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{user?.personalInfo?.fullName}</td>
                <td className="py-2 px-4">{user?.personalInfo?.email}</td>
                <td className="py-2 px-4">{user?.personalInfo?.phone}</td>
                <td className="py-2 px-4">{user?.personalInfo?.dateOfBirth}</td>
                <td className="py-2 px-4">{user?.personalInfo?.gender}</td>
                <td className="py-2 px-4 text-center flex justify-center gap-4">
                  <Link to={`/admin/${user._id}`}>
                    <Eye className="w-5 h-5 text-blue-600 cursor-pointer" />
                  </Link>
                  <Trash2
                    onClick={() => removeUser(user._id)}
                    className="w-5 h-5 text-red-600 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
            {filteredUsers?.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
