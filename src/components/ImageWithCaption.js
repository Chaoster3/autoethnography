import React from 'react';

const ImageWithCaption = ({ src, alt, caption, width = 'full', align = 'center', rounded = true }) => {
  const alignClasses = {
    left: 'mr-auto',
    center: 'mx-auto text-center',
    right: 'ml-auto'
  };

  const widthClasses = {
    full: 'w-full',
    '3/4': 'w-full md:w-3/4',
    '2/3': 'w-full md:w-2/3',
    '1/2': 'w-full md:w-1/2'
  };

  return (
    <figure className={`my-8 ${alignClasses[align]} flex flex-col items-center`}>
      <img 
        src={src} 
        alt={alt || caption} 
        className={`${widthClasses[width]} ${rounded ? 'rounded-xl' : ''} shadow-soft block`}
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 font-handwritten text-base italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageWithCaption; 