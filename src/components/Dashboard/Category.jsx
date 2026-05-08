import { useState, useEffect } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import InputField from "../common/InputFields";
import Typography from "../common/Typography";
import * as Yup from 'yup';
import { createCategory, getAllCategories, deleteCategory, updateCategory } from "../../assets/constants/api";
import { FaTrash } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null); // holds category being edited

    const initialValues = { category: editingCategory?.categoryName || '' };

    // -------- Fetch --------
    const fetchCategories = async () => {
        setLoading(true);
        try {
            const res = await getAllCategories();
            setCategories(res.data?.data ?? res.data ?? []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchCategories(); }, []);

    // -------- Delete --------
    const handleDelete = async (id) => {
        setLoading(true);
        try {
            await deleteCategory(id);
            await fetchCategories();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-8 py-8">

            {/* ---- Form Card ---- */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 mb-10 w-1/2">
                <div className="mb-6">
                    <Typography varient="h3">
                        {editingCategory ? "Update Category" : "Add Category"}
                    </Typography>
                    <p className="text-gray-400 text-sm mt-1">
                        {editingCategory ? "Edit the category name below" : "Fill in the name to create a new category"}
                    </p>
                </div>

                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    validationSchema={Yup.object({
                        category: Yup.string().required('Category name is required'),
                    })}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            if (editingCategory) {
                                await updateCategory(editingCategory.id, { categoryName: values.category });
                                setEditingCategory(null);
                            } else {
                                await createCategory({ categoryName: values.category });
                            }
                            resetForm();
                            await fetchCategories();
                        } catch (error) {
                            console.error("Error:", error.message);
                        }
                    }}
                >
                    {({ values, handleChange }) => (
                        <Form className='space-y-4'>
                            <div>
                                <label htmlFor="category" className='text-sm font-semibold text-gray-700 block mb-2'>
                                    Category Name
                                </label>
                                <InputField
                                    value={values?.category}
                                    onChange={handleChange}
                                    name="category"
                                    type="text"
                                    placeholder="e.g. Electronics"
                                />
                                <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="submit"
                                    className='bg-blue-700 hover:bg-blue-800 py-2.5 px-6 rounded-xl text-white font-semibold transition w-full'
                                >
                                    {editingCategory ? "Update" : "Save"}
                                </button>
                                {editingCategory && (
                                    <button
                                        type="button"
                                        onClick={() => setEditingCategory(null)}
                                        className='bg-gray-200 hover:bg-gray-300 py-2.5 px-6 rounded-xl text-gray-700 font-semibold transition w-full'
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* ---- Table Card ---- */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

                {/* Table Header */}
                <div className="px-6 py-5 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
                    <p className="text-gray-400 text-sm mt-1">All available categories</p>
                </div>

                <div className="p-6">
                    {loading && <p className="text-gray-500 text-sm">Loading categories...</p>}
                    {error && <p className="text-red-500 text-sm">Error: {error}</p>}

                    {!loading && !error && categories.length === 0 && (
                        <p className="text-gray-500 text-sm">No categories found.</p>
                    )}

                    {!loading && !error && categories.length > 0 && (
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="text-left text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-500">
                                        <th className="px-5 py-4 border border-blue-400">#</th>
                                        <th className="px-5 py-4 border border-blue-400">Category Name</th>
                                        <th className="px-5 py-4 border border-blue-400">Created At</th>
                                        <th className="px-5 py-4 border border-blue-400">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((cat, i) => (
                                        <tr
                                            key={cat.id}
                                            className={`hover:bg-blue-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                                        >
                                            <td className="px-5 py-4 border border-gray-200 text-gray-500">{i + 1}</td>
                                            <td className="px-5 py-4 border border-gray-200 text-gray-800 font-medium">{cat.categoryName}</td>
                                            <td className="px-5 py-4 border border-gray-200 text-gray-500">
                                                {new Date(cat.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-5 py-4 border border-gray-200">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => setEditingCategory(cat)}
                                                        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                                    >
                                                        <MdModeEdit size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(cat.id)}
                                                        className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
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
        </div>
    );
};

export default Category;