import { useState, useMemo } from 'react';
import { ITEM_CATEGORY } from '../../constants/itemCategory';
import ItemRow from './ItemRow';
import './ItemList.css';

const ItemList = ({
  items,
  searchKeyword,
  selectedCategory,
  selectedItemId,
  onSelectItem,
}) => {
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (
        selectedCategory !== ITEM_CATEGORY.ALL &&
        item.category !== selectedCategory
      ) {
        return false;
      }

      if (searchKeyword && !item.name.includes(searchKeyword)) {
        return false;
      }

      return true;
    });
  }, [items, searchKeyword, selectedCategory]);

  return (
    <div className="item-list">
      {filteredItems.map((item) => (
        <ItemRow
          key={item.itemId}
          item={item}
          isSelected={item.itemId === selectedItemId}
          onClick={() => onSelectItem(item)}
        />
      ))}

      {filteredItems.length === 0 && (
        <div className="item-list-empty">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
};

export default ItemList;
