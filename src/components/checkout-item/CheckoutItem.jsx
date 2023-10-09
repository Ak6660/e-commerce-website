import PropTypes from "prop-types";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ product }) => {
  const { name, price, imageUrl, quantity } = product;
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <span>${price}</span> x{" "}
        <span>
          <span> &lt; </span>
          {quantity}
          <span> &gt; </span>
        </span>
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CheckoutItem;
