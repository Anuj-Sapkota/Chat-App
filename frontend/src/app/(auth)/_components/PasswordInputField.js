'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const PasswordInputField = () => {
  //use state
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          className="bg-gray-50 pr-12 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <FontAwesomeIcon
          onClick={() => setShowPassword((prev) => !prev)}
          icon={showPassword ? faEye : faEyeSlash}
          className="absolute right-3 top-4 text-white w-2"
        />
      </div>
    </>
  );
};

export default PasswordInputField;
