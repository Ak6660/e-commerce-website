import AdminFormInput from "../../components/admin-form-input/AdminFormInput";
import "./AdminPanel.scss";

const AdminPanel = (props) => {
  return (
    <div>
      <form className="product-add-form-container">
        <div>
          <AdminFormInput label="Name" placeholder="title" />
          <div className="admin-inputs-container">
            <label className="admin-input-label">Image</label>
            <input type="file" />
          </div>
          <AdminFormInput
            className="admin-input"
            label="Price"
            placeholder="price"
          />
        </div>
        <div className="btn-container">
          <button className="product-add-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

AdminPanel.propTypes = {};

export default AdminPanel;

// {
//   "id": 1,
//   "name": "Brown Brim",
//   "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
//   "price": 25
// },
