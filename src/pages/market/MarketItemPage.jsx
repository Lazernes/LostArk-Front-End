import { useState } from 'react';
import ItemSearchBar from './components/ItemSearchBar/ItemSearchBar';
import CategoryTabs from './components/CategoryTabs/CategoryTabs';
import ItemList from './components/ItemList/ItemList';
import ItemDetail from './components/ItemDetail/ItemDetailHeader';
import { mockMarketItems } from './constants/mockMarketItems';
import { ITEM_CATEGORY } from './constants/itemCategory';
import './MarketItemPage.css';

const MarketItemPage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(ITEM_CATEGORY.ALL);
  const [selectedItem, setSelectedItem] = useState(null); // ⭐ 핵심

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
            <ItemList
              items={mockMarketItems}
              searchKeyword={searchKeyword}
              selectedCategory={selectedCategory}
              selectedItem={selectedItem}
              onSelectItem={setSelectedItem}
            />
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
