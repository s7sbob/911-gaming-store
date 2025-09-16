import { Link } from 'react-router-dom';
import { FaHome, FaGamepad } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#141310]">
      <div className="text-center">
        <div className="text-9xl font-bold text-[#4160bf] mb-4">404</div>
        <h1 className="text-3xl font-bold text-[#dfdfdf] mb-4">Page Not Found</h1>
        <p className="text-[#dfdfdf]/70 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved to another location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="bg-[#4160bf] hover:bg-[#4160bf]/80 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
          >
            <FaHome />
            Back to Home
          </Link>
          <Link 
            to="/games"
            className="border border-[#4160bf] text-[#4160bf] hover:bg-[#4160bf] hover:text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
          >
            <FaGamepad />
            Browse Games
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
