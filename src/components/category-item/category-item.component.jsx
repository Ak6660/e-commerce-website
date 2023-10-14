import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const imageRef = useRef();
  useEffect(() => {
    const imageEl = imageRef.current;
    /////////////////////////////////////////////
    /////////////Lazy Loading////////////////////
    const imgObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.style.backgroundImage = `url(${imageUrl})`;
        }
      },

      {
        root: null,
        threshold: 0,
      }
    );
    if (imageEl) {
      imgObserver.observe(imageEl);
    }

    return () => {
      if (imageEl) {
        imgObserver.unobserve(imageEl);
      }
    };
  }, [imageRef, imageUrl]);

  return (
    <div className="category-container">
      <div className="background-image" ref={imageRef} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.object,
};

export default CategoryItem;
