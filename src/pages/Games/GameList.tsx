import GameCard, { type GameCardProps } from './components/GameCard';
import { FaGamepad } from 'react-icons/fa';

interface GameListProps {
  games: GameCardProps[];
  loading?: boolean;
}

const GameList = ({ games, loading = false }: GameListProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-[#dfdfdf]/10 rounded-2xl overflow-hidden animate-pulse">
            <div className="h-64 bg-[#4160bf]/20"></div>
            <div className="p-6">
              <div className="h-4 bg-[#4160bf]/20 rounded mb-2"></div>
              <div className="h-4 bg-[#4160bf]/20 rounded w-3/4 mb-4"></div>
              <div className="h-10 bg-[#4160bf]/20 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="text-center py-20">
        <FaGamepad className="text-6xl text-[#4160bf]/50 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#dfdfdf] mb-2">No Games Found</h3>
        <p className="text-[#dfdfdf]/70 text-lg">
          Try adjusting your filters or search terms to find more games.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
};

export default GameList;
