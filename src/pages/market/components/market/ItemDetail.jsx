import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <div className="item-detail-header">
        <div className={`detail-icon grade-${item.grade.toLowerCase()}`}>
          <img src={item.iconUrl} alt={item.name} />
        </div>

        <div className="detail-info">
          <div className="detail-name">{item.name}</div>
          <div className="detail-grade">{item.grade}</div>
        </div>
      </div>

      <div className="item-detail-price">
        <div className="price-label">현재 최저가</div>
        <div className="price-value">
          {item.currentPrice.toLocaleString()} G
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
