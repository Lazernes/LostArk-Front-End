import { useState } from 'react';
import './ItemSearchBar.css';

const ItemSearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="item-search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="아이템 이름 검색"
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
};

export default ItemSearchBar;
