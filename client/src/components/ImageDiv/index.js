import React from "react";
import "./style.css"

// The ImageDiv component renders a div that helps the image render as a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
function ImageDiv({ src }) {
  return (
    <div
    className="thumbnail"
      role="img"
      aria-label="Book Thumbnail"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

export default ImageDiv;