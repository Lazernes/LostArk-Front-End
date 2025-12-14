import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import MainPage from '../pages/main/MainPage';
import MarketItemPage from '../pages/market/MarketItemPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/market/items" element={<MarketItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
