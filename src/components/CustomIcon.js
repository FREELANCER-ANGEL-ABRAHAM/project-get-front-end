import React from 'react';
import Image from './Image';

function CustomIcon({ src, alt, height, width }) {
  return (
    <span className="text-center mb-3">
      <Image src={src} alt={alt} height={height} width={width} />
    </span>
  );
}

export default CustomIcon;