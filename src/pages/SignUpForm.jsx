import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../assets/constants/api";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import UsersPage from "./UsersPage";
import { FaEye, FaEyeSlash } from "react-icons/fa";
//imports ends here

const SignUpForm = () => {
  //useSates
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [singleUser, setSingleUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Functions for the api calls

  // First function for creating a user
  const handleCreateUser = async (values) => {
    setLoading(true);
    try {
      await createUser(values);
      await handleGetAllUsers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Second function for getting all users
  const handleGetAllUsers = async () => {
    setLoading(true);
    try {
      const res = await getAllUsers();
      console.log("API response:", res);
      setUsers(res.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Third function for deleting a user
  const handleDeleteUser = async (id) => {
    setLoading(true);
    try {
      await deleteUser(id);
      await handleGetAllUsers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fourth function for updating a user
  const handleUpdateUser = async (id, values) => {
    setLoading(true);
    try {
      await updateUser(id, values);
      await handleGetAllUsers();
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect for all functions
  useEffect(() => {
    handleGetAllUsers();
  }, []);

  // the initialValues is used for updating a single user
  const initialValues = {
    firstName: singleUser?.firstName || "",
    lastName: singleUser?.lastName || "",
    email: singleUser?.email || "",
    password: "",
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 px-8 py-4 border-b border-gray-100">
        <Link to="/" className="text-[#2196F3]">
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-700">Sign up Form</span>
      </div>

      {/* Form Container */}
      <div className="flex flex-col items-center py-12">
        <div className="w-[400px]">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Sign Up</h2>
          <p className="text-sm text-gray-500 mb-8">
            Upgrade your tech game with us!
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
              password: Yup.string().when([], {
                is: () => !singleUser?.id,
                then: (schema) =>
                  schema.min(8).required("Password is required"),
                otherwise: (schema) => schema.notRequired(),
              }),
            })}
            onSubmit={(values, { resetForm }) => {
              if (singleUser?.id) {
                handleUpdateUser(singleUser.id, values);
                setSingleUser({}); // ← back to CREATE mode after update
              } else {
                handleCreateUser(values);
              }
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {/* First Name */}
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="text-sm text-gray-700 mb-1 block"
                  >
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className={`w-full px-4 py-3 rounded bg-[#f8f8f8] border outline-none text-sm transition-colors
                      ${
                        errors.firstName && touched.firstName
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-[#2196F3]"
                      }`}
                  />
                  <ErrorMessage name="firstName">
                    {(msg) => (
                      <p className="text-red-500 text-xs mt-1">{msg}</p>
                    )}
                  </ErrorMessage>
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="text-sm text-gray-700 mb-1 block"
                  >
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className={`w-full px-4 py-3 rounded bg-[#f8f8f8] border outline-none text-sm transition-colors
                      ${
                        errors.lastName && touched.lastName
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-[#2196F3]"
                      }`}
                  />
                  <ErrorMessage name="lastName">
                    {(msg) => (
                      <p className="text-red-500 text-xs mt-1">{msg}</p>
                    )}
                  </ErrorMessage>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-700 mb-1 block"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="myemail@email.com"
                    className={`w-full px-4 py-3 rounded bg-[#f8f8f8] border outline-none text-sm transition-colors
                      ${
                        errors.email && touched.email
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-[#2196F3]"
                      }`}
                  />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <p className="text-red-500 text-xs mt-1">{msg}</p>
                    )}
                  </ErrorMessage>
                </div>

                {/* Password */}
                {!singleUser?.id && (
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-700 mb-1 block"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••"
                        className={`w-full px-4 py-3 rounded bg-[#f8f8f8] border outline-none text-sm transition-colors
                        ${
                          errors.password && touched.password
                            ? "border-red-400 focus:border-red-400"
                            : "border-gray-200 focus:border-[#2196F3]"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>
                    <ErrorMessage name="password">
                      {(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>
                )}

                {/* Sign Up Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#2196F3] text-white py-3 rounded text-sm font-semibold hover:bg-blue-600 transition mb-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Saving..."
                    : singleUser?.id
                      ? "Update"
                      : "Sign Up"}
                </button>

                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-600">
                  Already have account?{" "}
                  <Link to="/signin" className="text-[#2196F3] font-medium">
                    Sign in
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <UsersPage
        users={users}
        loading={loading}
        error={error}
        onEdit={(user) => setSingleUser(user)}
        onDelete={(id) => handleDeleteUser(id)}
      />
    </div>
  );
};

export default SignUpForm;
