import './ItemDetailHeader.css';

const ItemDetailHeader = ({ item }) => {
  if (!item) return null;

  return (
    <div className="item-detail-header">
      <div className={`item-icon-wrapper grade-${item.grade.toLowerCase()}`}>
        <img
          src={item.iconUrl}
          alt={item.name}
          className="item-detail-icon"
        />
      </div>

      <span className="item-detail-name">
        {item.name}
      </span>
    </div>
  );
};

export default ItemDetailHeader;
