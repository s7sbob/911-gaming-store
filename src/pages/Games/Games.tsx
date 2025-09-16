import { useState, useMemo } from 'react';
import Filters from './components/Filters';
import GameList from './GameList';

// Dummy games data for illustration
const allGames = [
  { id: 1, title: "The Witcher 3", price: 19.99, rating: 4.9, image: "./game.jpg", platform: "PC", discount: 20, isNew: false, reviews: 1200, tags: ["RPG", "Adventure"] },
  { id: 2, title: "FIFA 2024", price: 29.99, rating: 4.7, image: "./game.jpg", platform: "PS5", discount: 10, isNew: true, reviews: 800, tags: ["Sports", "Multiplayer"] },
  { id: 3, title: "Halo Infinite", price: 39.99, rating: 4.6, image: "./game.jpg", platform: "Xbox", discount: 0, isNew: false, reviews: 950, tags: ["Shooter", "Sci-Fi"] },
  { id: 4, title: "Cyberpunk 2077", price: 24.99, rating: 4.5, image: "./game.jpg", platform: "PC", discount: 30, isNew: true, reviews: 1100, tags: ["RPG", "Open World"] },
  { id: 5, title: "God of War", price: 34.99, rating: 4.8, image: "./game.jpg", platform: "PS5", discount: 25, isNew: false, reviews: 1300, tags: ["Action", "Adventure"] },
  { id: 6, title: "Forza Horizon 5", price: 29.99, rating: 4.7, image: "./game.jpg", platform: "Xbox", discount: 15, isNew: false, reviews: 700, tags: ["Racing", "Open World"] }
];

const Games = () => {
  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState("");
  const [sortBy, setSortBy] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const filteredGames = useMemo(() => {
    return allGames.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());
      const matchesPlatform = platformFilter ? game.platform === platformFilter : true;
      // Optionally filter by priceRange here if needed
      return matchesSearch && matchesPlatform;
    });
  }, [search, platformFilter, priceRange]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#dfdfdf] mb-8">Games Store</h1>
      <Filters
        search={search}
        setSearch={setSearch}
        platformFilter={platformFilter}
        setPlatformFilter={setPlatformFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <GameList games={filteredGames} />
    </div>
  );
};

export default Games;