import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Directory-item.styles.scss";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
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
    <div className="directory-item-container">
      <div className="background-image" ref={imageRef} />
      <div
        onClick={() => navigate(`shop/${title.toLowerCase()}`)}
        className="body"
      >
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

DirectoryItem.propTypes = {
  category: PropTypes.object,
};

export default DirectoryItem;
