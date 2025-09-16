import HeroSection from '../components/HeroSection';
import FeaturedGames from '../components/FeaturedGames';
import Categories from '../components/Categories';
import SpecialOffers from '../components/SpecialOffers';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedGames />
      <Categories />
      <SpecialOffers />
      <Newsletter />
    </main>
  );
};

export default Home;
