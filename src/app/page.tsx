import FaqWrap from '@/components/FaqWrap';
import Hero from '@/components/Hero';
import MapsWrap from '@/components/MapsWrap';
import Footer from '@/components/footer';
import Pricing from '@/components/pricing';

const Home = () => {
  return (
    <>
      <Hero />
      <Pricing />
      <MapsWrap />
      <FaqWrap />
      <Footer />
    </>
  );
};

export default Home;
