// components/ProductEditor.jsx
import { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import StarRating from "../common/StarRating";
import Typography from "../common/Typography";

const ProductEditor = () => {
  // State to hold the selected file and its local preview URL
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef(null);

  const initialValues = {
    name: "",
    category: "",
    price: "",
    oldPrice: "",
    description: "",
    image: null, // Will store the file object
    stock: true,
  };

  const handleSubmit = (values) => {
    // TODO: later send FormData with the file to your API
    console.log("Form values:", values);
    console.log("File ready to upload:", values.image);
  };

  // When a file is selected, set it in Formik & create a preview
  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue("image", file);
      setSelectedFile(file);
      
      // Generate a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Open the file dialog
  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-8 py-4 border-b border-gray-100">
        <a href="/" className="text-[#2196F3]">
          <Typography variant="small">Home</Typography>
        </a>
        <Typography variant="small">/</Typography>
        <span className="text-gray-700">
          <Typography variant="small">Edit Product</Typography>
        </span>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required("Product name is required"),
          category: Yup.string().required("Category is required"),
          price: Yup.number()
            .typeError("Must be a number")
            .positive("Must be positive")
            .required("Price is required"),
          oldPrice: Yup.number()
            .typeError("Must be a number")
            .nullable(),
          description: Yup.string()
            .min(20, "Description too short")
            .required("Description is required"),
          // image is now optional; validation for file type/size can be added later
        })}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            {/* Main Content – same grid as ProductHero */}
            <div className="max-w-[1200px] mx-auto flex gap-10 px-6 py-10">
              {/* Left — Image preview & file picker */}
              <div className="flex flex-col gap-4 w-[300px] shrink-0">
                {/* Preview area */}
                <div className="bg-[#F8F8F8] rounded-[5px] p-6 flex items-center justify-center h-[320px] relative border-2 border-dashed border-gray-300">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Product preview"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400">No image selected</span>
                  )}
                </div>

                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={(e) => handleFileChange(e, setFieldValue)}
                  className="hidden"
                />

                {/* Choose Image button */}
                <button
                  type="button"
                  onClick={openFileDialog}
                  className="w-full py-3 rounded border border-[#2196F3] text-[#2196F3] font-semibold text-sm hover:bg-blue-50 transition"
                >
                  Choose Image
                </button>

                {/* Show file name if selected */}
                {selectedFile && (
                  <p className="text-xs text-gray-500 truncate">
                    {selectedFile.name}
                  </p>
                )}
              </div>

              {/* Middle — Product info fields */}
              <div className="flex-1 max-w-[500px]">
                {/* Product Name */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-1">
                    Product Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="HP EliteBook 840 G6"
                    className="w-full px-4 py-3 rounded bg-[#f8f8f8] border border-gray-200 text-sm focus:border-[#2196F3] outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    render={(msg) => (
                      <p className="text-red-500 text-xs mt-1">{msg}</p>
                    )}
                  />
                </div>

                {/* Category */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-1">
                    Category
                  </label>
                  <Field
                    name="category"
                    type="text"
                    placeholder="Laptop / Phone / Accessories"
                    className="w-full px-4 py-3 rounded bg-[#f8f8f8] border border-gray-200 text-sm focus:border-[#2196F3] outline-none"
                  />
                  <ErrorMessage
                    name="category"
                    render={(msg) => (
                      <p className="text-red-500 text-xs mt-1">{msg}</p>
                    )}
                  />
                </div>

                {/* Price (new / old) */}
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-700 mb-1">
                      Price ($)
                    </label>
                    <Field
                      name="price"
                      type="text"
                      inputMode="decimal"
                      placeholder="999"
                      className="w-full px-4 py-3 rounded bg-[#f8f8f8] border border-gray-200 text-sm focus:border-[#2196F3] outline-none"
                    />
                    <ErrorMessage
                      name="price"
                      render={(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-700 mb-1">
                      Old Price ($) (optional)
                    </label>
                    <Field
                      name="oldPrice"
                      type="text"
                      inputMode="decimal"
                      placeholder="899"
                      className="w-full px-4 py-3 rounded bg-[#f8f8f8] border border-gray-200 text-sm focus:border-[#2196F3] outline-none"
                    />
                    <ErrorMessage
                      name="oldPrice"
                      render={(msg) => (
                        <p className="text-red-500 text-xs mt-1">{msg}</p>
                      )}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-1">
                    Description
                  </label>
                  <Field
                    name="description"
                    as="textarea"
                    rows={4}
                    placeholder="Product description..."
                    className="w-full px-4 py-3 rounded bg-[#f8f8f8] border border-gray-200 text-sm focus:border-[#2196F3] outline-none resize-none"
                  />
                  <ErrorMessage
                    name="description"
                    render={(msg) => (
                      <p className="text-red-500 text-xs mt-1">{msg}</p>
                    )}
                  />
                </div>

                {/* Stock toggle */}
                <div className="flex items-center gap-2 mb-6">
                  <Field
                    name="stock"
                    type="checkbox"
                    className="w-4 h-4 text-[#2196F3] rounded"
                  />
                  <label className="text-sm text-gray-700">In stock</label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#2196F3] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-blue-600 transition"
                >
                  Save Product
                </button>
              </div>

              {/* Right — Preview panel */}
              <div className="w-[260px] shrink-0">
                <Typography variant="h6" className="text-gray-700 mb-3">
                  Preview
                </Typography>
                <div className="bg-[#F8F8F8] rounded-[5px] p-5 flex flex-col items-center gap-3">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="h-[160px] object-contain"
                    />
                  ) : (
                    <div className="h-[160px] flex items-center justify-center text-gray-400">
                      No image
                    </div>
                  )}
                  <Typography variant="h6" className="text-gray-900">
                    {values.name || "Product Name"}
                  </Typography>
                  <StarRating value={4.5} />
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="p"
                      className="text-[#2196F3] font-semibold"
                    >
                      ${values.price || "—"}
                    </Typography>
                    {values.oldPrice && (
                      <Typography variant="small" className="text-gray-400 line-through">
                        ${values.oldPrice}
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductEditor;