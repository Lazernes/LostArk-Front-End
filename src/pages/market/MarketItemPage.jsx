import { useEffect, useState } from 'react';
import ItemSearchBar from './components/ItemSearchBar/ItemSearchBar';
import CategoryTabs from './components/CategoryTabs/CategoryTabs';
import ItemList from './components/ItemList/ItemList';
import ItemDetail from './components/ItemDetail/ItemDetailHeader';
import { ITEM_CATEGORY } from './constants/itemCategory';
import { getMarketItems } from '../../apis/market/marketApi';
import './MarketItemPage.css';

const MarketItemPage = () => {
  const [items, setItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(ITEM_CATEGORY.ALL);
  const [selectedItem, setSelectedItem] = useState(null); // ⭐ 핵심

  const [loading, setLoading] = useState(false);       // ⭐ 로딩
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const data = await getMarketItems();
        setItems(data);
      } catch (e) {
        setError('아이템 목록을 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  
  return (
    <div className="market-page">
      <div className="market-layout">
        <aside className="market-sidebar">
          <div className="market-search">
            <ItemSearchBar onSearch={setSearchKeyword} />
          </div>

          <CategoryTabs
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <div className="market-list">
            {loading && <div className="loading">로딩 중...</div>}
            {error && <div className="error">{error}</div>}

            {!loading && !error && (
              <ItemList
                items={items}
                searchKeyword={searchKeyword}
                selectedCategory={selectedCategory}
                selectedItem={selectedItem}
                onSelectItem={setSelectedItem}
              />
            )}
          </div>
        </aside>

        <section className="market-content">
          <ItemDetail item={selectedItem} />
        </section>
      </div>
    </div>
  );
};

export default MarketItemPage;
