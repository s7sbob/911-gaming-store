import { createContext, useContext, useState, type ReactNode } from 'react';

type Currency = 'USD' | 'EGP';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (price: number) => number;
  getCurrencySymbol: () => string;
  formatPrice: (price: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const exchangeRate = 31; // 1 USD = 31 EGP (approximate)

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const convertPrice = (price: number) => {
    return currency === 'EGP' ? price * exchangeRate : price;
  };

  const getCurrencySymbol = () => {
    return currency === 'USD' ? '$' : 'EGP';
  };

  const formatPrice = (price: number) => {
    const convertedPrice = convertPrice(price);
    const symbol = getCurrencySymbol();
    
    if (currency === 'USD') {
      return `$${convertedPrice.toLocaleString()}`;
    } else {
      return `${convertedPrice.toLocaleString()} EGP`;
    }
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      convertPrice,
      getCurrencySymbol,
      formatPrice
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
