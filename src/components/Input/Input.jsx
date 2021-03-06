import React from "react";

export default function Input({
  name,
  text,
  type,
  value,
  onChange,
  disabled = false,
  register,
  required,
  requiredMsg,
  regex,
  containerClassName,
  labelClassName,
  inputClassName,
}) {
  return (
    <div className={`flex flex-col gap-1 mt-5 ${containerClassName}`}>
      <label
        htmlFor={name}
        className={`text-dark-green pl-1 ${labelClassName}`}
      >
        {text}
      </label>
      {register ? (
        <input
          id={name}
          name={name}
          type={type || "text"}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`bg-light-gray text-dark-green p-2 rounded-md focus:outline-dark-green ${inputClassName}`}
          {...register(name, { required: requiredMsg,  pattern: regex })}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type || "text"}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`bg-light-gray text-dark-green p-2 rounded-md focus:outline-dark-green ${inputClassName}`}
        />
      )}
    </div>
  );
}
