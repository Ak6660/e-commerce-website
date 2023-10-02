import React from "react";
import "./Button.styles.scss";

const Button_Type_Classes = {
  google: "google-sign-in",
  inverted: "inverted ",
};

export const Button = ({ children, buttontype, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_Type_Classes[buttontype]} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};
