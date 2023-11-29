import { Carousel } from '@/material-ui/index';
import CarouselWrap from './carouselWrap';

const CarouselDefault = () => {
  return (
    <Carousel className='roundedXl'>
      <CarouselWrap
        src='https://res.cloudinary.com/dgmm08cpq/image/upload/v1701237272/assetsNextJS/Kolam-Renang-Taipa_wub4mk.jpg'
        alt='image 1'
      />
      <CarouselWrap
        src='https://res.cloudinary.com/dgmm08cpq/image/upload/v1701237657/assetsNextJS/_Lokasi-Pantai-Taipa_Palu.jpg__jgra4h.jpg'
        alt='image 2'
      />
      <CarouselWrap
        src='https://res.cloudinary.com/dgmm08cpq/image/upload/v1701237843/assetsNextJS/2023-06-28_gdztyi.jpg'
        alt='image 3'
      />
    </Carousel>
  );
};

export default CarouselDefault;
