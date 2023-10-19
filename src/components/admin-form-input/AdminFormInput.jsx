import PropTypes from "prop-types";
import "./AdminFormInput.scss";

const AdminFormInput = ({ label, ...otherProps }) => {
  return (
    <div className="admin-inputs-container">
      <label className="admin-input-label">{label}</label>
      <input className="admin-input" {...otherProps} />
    </div>
  );
};

AdminFormInput.propTypes = {
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.object.isRequired,
};

export default AdminFormInput;
