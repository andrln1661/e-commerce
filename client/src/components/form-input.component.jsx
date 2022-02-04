import React from "react";

import "./form-input.styles.scss";

function FormInput({ label, type, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" type={type} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor=""
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
