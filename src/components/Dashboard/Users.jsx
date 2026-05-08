
import { useState, useEffect } from "react";
import { getAllUsers, createUser, updateUser, deleteUser } from "../../assets/constants/api";
import UsersPage from "../../pages/UsersPage";         
import UserFormModal from "./UserFormModal";  

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [singleUser, setSingleUser] = useState({}); // holds user for editing

  // -------- Data Fetching --------
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await getAllUsers();
      // Adjust according to API response shape
      setUsers(res.data?.data ?? res.data ?? []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // -------- CRUD Handlers --------
  const handleCreateUser = async (values) => {
    setLoading(true);
    try {
      await createUser(values);
      closeModal();
      await fetchUsers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (id, values) => {
    setLoading(true);
    try {
      await updateUser(id, values);
      closeModal();
      await fetchUsers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    setLoading(true);
    try {
      await deleteUser(id);
      await fetchUsers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // -------- Modal Control --------
  const openAddModal = () => {
    setSingleUser({}); // empty = create mode
    setModalOpen(true);
  };

  const openEditModal = (user) => {
    setSingleUser(user); // pre‑fill the form
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSingleUser({});
  };

  // Form submit decides create or update
  const handleFormSubmit = (values, userId) => {
    if (userId) {
      handleUpdateUser(userId, values);
    } else {
      handleCreateUser(values);
    }
  };

  // Prepare initial values for Formik
  const formInitialValues = singleUser?.id
    ? {
        firstName: singleUser.firstName || "",
        lastName: singleUser.lastName || "",
        email: singleUser.email || "",
        password: "", // not used in update
      }
    : { firstName: "", lastName: "", email: "", password: "" };

  return (
    <div>
      {/* Header bar with Add button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Users</h2>
        <button
          onClick={openAddModal}
          className="bg-[#2196F3] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          + Add User
        </button>
      </div>

      {/* Table (always visible) */}
      <UsersPage
        users={users}
        loading={loading}
        error={error}
        onEdit={openEditModal}   // opens modal in edit mode
        onDelete={handleDeleteUser}
      />

      {/* Modal (conditionally rendered) */}
      {modalOpen && (
        <UserFormModal
          initialValues={formInitialValues}
          onSubmit={handleFormSubmit}
          loading={loading}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Users;