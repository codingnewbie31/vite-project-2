
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";

const UsersPage = ({ users, onEdit, onDelete, loading, error }) => {

  return (
    <div>
      {/* Breadcrumb
      <div className="flex items-center gap-2 text-sm text-gray-500 px-8 py-4 border-b border-gray-100">
        <Link to="/" className="text-[#2196F3]">
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-700">Users</span>
      </div> */}

      {/* Content */}
      <div className="px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Registered Users
        </h2>

        {loading && <p className="text-gray-500 text-sm">Loading users...</p>}
        {error && <p className="text-red-500 text-sm">Error: {error}</p>}

        {!loading && !error && users.length === 0 && (
          <p className="text-gray-500 text-sm">No users found.</p>
        )}

        {!loading && !error && users.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse ">
              <thead>
                <tr className="bg-[#f8f8f8] text-left text-white bg-gradient-to-r from-slate-400 via-slate-700 to-slate-400 ">
                  <th className="px-4 py-3 border border-gray-200">#</th>
                  <th className="px-4 py-3 border border-gray-200">
                    First Name
                  </th>
                  <th className="px-4 py-3 border border-gray-200">
                    Last Name
                  </th>
                  <th className="px-4 py-3 border border-gray-200">Email</th>
                  <th className="px-4 py-3 border border-gray-200">Role</th>
                  <th className="px-4 py-3 border border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, i) => (
                  <tr
                    key={user._id || user.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 border border-gray-200 text-gray-500">
                      {i + 1}
                    </td>
                    <td className="px-4 py-3 border border-gray-200 text-gray-800">
                      {user.firstName}
                    </td>
                    <td className="px-4 py-3 border border-gray-200 text-gray-800">
                      {user.lastName}
                    </td>
                    <td className="px-4 py-3 border border-gray-200 text-gray-800">
                      {user.email}
                    </td>
                    <td className="px-4 py-3 border border-gray-200 text-gray-800">
                      {user.role}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      <div className="flex gap-2">
                        {/* Edit button */}
                        <button
                          onClick={() => onEdit(user)}
                          className="p-2 bg-green-700 text-white rounded-md hover:bg-green-800"
                        >
                          <MdModeEdit size={18} />
                        </button>

                        {/* Delete button */}
                        <button
                          onClick={() => onDelete(user.id)}
                          className="p-2 bg-red-700 text-white rounded-md hover:bg-red-800"
                        >
                          <FaTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
