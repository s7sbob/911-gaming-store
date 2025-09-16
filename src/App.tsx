import { BrowserRouter as Router } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <CurrencyProvider>
      <Router>
        <div className="min-h-screen bg-[#141310] text-white">
          <ScrollToTop />
          <Header />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </CurrencyProvider>
  );
}

export default App;
