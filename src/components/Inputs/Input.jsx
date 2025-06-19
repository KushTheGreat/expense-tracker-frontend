import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({
  value,
  onChange,
  placeholder = "",
  label,
  type = "text",
  id,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div>
      {label && (
        <label htmlFor={id} className="text-[13px] text-slate-800">
          {label}
        </label>
      )}

      <div className="input-box relative flex items-center">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none pr-8"
          value={value}
          onChange={onChange} // <-- just forward event, do NOT extract target.value here
        />

        {type === "password" && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-2 text-primary"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <FaRegEye size={22} />
            ) : (
              <FaRegEyeSlash size={22} className="text-slate-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
