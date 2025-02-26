import React from "react";

function InfiniteScroll({ images, className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden ${className} `}>
      <div className="flex whitespace-nowrap animate-scroll">
        {/* Duplicate images for infinite scrolling effect */}
        {[...images, ...images].map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="mx-16"  />
        ))}
      </div>
    </div>
  );
}

export default InfiniteScroll;
