import "./FormInput.styles.scss";
import PropTypes from "prop-types";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </label>
      )}
    </div>
  );
};
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};
