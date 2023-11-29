import Image from 'next/image';
import React from 'react';

type carouselProps = {
  src: string;
  alt: string;
};

const CarouselWrap = ({ src, alt }: carouselProps) => {
  return (
    <div className='w-full h-72'>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className='h-full w-full object-cover'
      />
    </div>
  );
};

export default CarouselWrap;
