// components/UserFormModal.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const UserFormModal = ({ initialValues, onSubmit, loading, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  // If initialValues has an id, we are in update mode
  const isUpdate = !!initialValues?.id;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        {/* Header */}
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {isUpdate ? "Update User" : "Add New User"}
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          {isUpdate
            ? "Edit the details below."
            : "Fill in the details to create a new user."}
        </p>

        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: isUpdate
              ? Yup.string().notRequired()
              : Yup.string().min(8, "At least 8 characters").required("Password is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values, isUpdate ? initialValues.id : null);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {/* First Name */}
              <div className="mb-4">
                <label htmlFor="firstName" className="text-sm text-gray-700 mb-1 block">
                  First Name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className={`w-full px-4 py-3 rounded bg-[#f8f8f8] border outline-none text-sm transition-colors ${
                    errors.firstName && touched.firstName
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-[#2196F3]"
                  }`}
                />
                <ErrorMessage name="firstName">
                  {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                </ErrorMessage>
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label htmlFor="lastName" className="text-sm text-gray-700 mb-1 block">
                  Last Name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className={`w-full px-4 py-3 rounded bg-[#f8f8f8] border outline-none text-sm transition-colors ${
                    errors.lastName && touched.lastName
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-[#2196F3]"
                  }`}
                />
                <ErrorMessage name="lastName">
                  {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                </ErrorMessage>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="text-sm text-gray-700 mb-1 block">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="myemail@email.com"
                  className={`w-full px-4 py-3 rounded bg-[#f8f8f8] border outline-none text-sm transition-colors ${
                    errors.email && touched.email
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-[#2196F3]"
                  }`}
                />
                <ErrorMessage name="email">
                  {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                </ErrorMessage>
              </div>

              {/* Password (only for create) */}
              {!isUpdate && (
                <div className="mb-6">
                  <label htmlFor="password" className="text-sm text-gray-700 mb-1 block">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••"
                      className={`w-full px-4 py-3 rounded bg-[#f8f8f8] border outline-none text-sm transition-colors ${
                        errors.password && touched.password
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-[#2196F3]"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <ErrorMessage name="password">
                    {(msg) => <p className="text-red-500 text-xs mt-1">{msg}</p>}
                  </ErrorMessage>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#2196F3] text-white py-3 rounded font-semibold hover:bg-blue-600 transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Saving..." : isUpdate ? "Update" : "Add User"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserFormModal;