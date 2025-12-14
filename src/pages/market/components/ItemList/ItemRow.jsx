const ItemRow = ({ item, isSelected, onClick }) => {
  const isUp = item.priceChange > 0;
  const isDown = item.priceChange < 0;

  return (
    <div
      className={`item-row grade-${item.grade.toLowerCase()} ${
        isSelected ? 'selected' : ''
      }`}
      onClick={onClick}
    >
      {/* 아이콘 */}
      <div className="item-icon-wrapper">
        <img
          src={item.iconUrl}
          alt={item.name}
          className="item-icon"
        />
      </div>

      {/* 이름 + 묶음 */}
      <div className="item-info">
        <div className="item-name">{item.name}</div>
        <div className="item-bundle">x{item.bundleCount}</div>
      </div>

      {/* 가격 */}
      <div className="item-price">
        <div className="current-price">
          {item.currentPrice.toLocaleString()}
        </div>

        <div
          className={`price-change ${
            isUp ? 'up' : isDown ? 'down' : ''
          }`}
        >
          {isUp && '+'}
          {item.priceChange.toLocaleString()} ({item.changeRate}%)
        </div>
      </div>
    </div>
  );
};

export default ItemRow;
