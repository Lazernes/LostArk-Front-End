import { CATEGORY_TABS } from '../../constants/categoryTabs';
import './CategoryTabs.css';

const CategoryTabs = ({ selectedCategory, onSelect }) => {
  return (
    <div className="category-tabs">
      {CATEGORY_TABS.map((tab) => (
        <button
          key={tab.value}
          className={`category-tab ${
            selectedCategory === tab.value ? 'active' : ''
          }`}
          onClick={() => onSelect(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
