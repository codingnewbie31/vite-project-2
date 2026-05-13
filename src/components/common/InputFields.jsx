import React from 'react';
import { Field } from 'formik';

const InputField = ({ name, type, placeholder }) => {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded border border-gray-200 outline-2 text-sm"
      />
    </div>
  );
};

export default InputField;