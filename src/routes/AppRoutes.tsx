import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Games from '../pages/Games/Games';
import PC from '../pages/PC/PC';
import Console from '../pages/Console/Console';
import Accessories from '../pages/Accessories/Accessories';
import Contact from '../pages/Contact/Contact';
import Cart from '../pages/Cart/Cart';
import Profile from '../pages/Profile/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/pc" element={<PC />} />
      <Route path="/console" element={<Console />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
