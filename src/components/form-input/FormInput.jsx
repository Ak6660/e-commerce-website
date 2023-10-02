import "./FormInput.styles.scss";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
};
