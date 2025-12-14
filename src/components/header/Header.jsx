import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        {/* 로고 */}
        <NavLink to="/" className="header-logo">
          로고
        </NavLink>

        {/* 네비게이션 */}
        <nav className="header-nav">

          <NavLink
            to="/market/items1"
            className={({ isActive }) =>
              isActive ? 'nav-item active' : 'nav-item'
            }
          >
            캐릭터 정보
          </NavLink>

          <NavLink
            to="/market/items2"
            className={({ isActive }) =>
              isActive ? 'nav-item active' : 'nav-item'
            }
          >
            스펙업 효율
          </NavLink>

          <NavLink
            to="/market/items3"
            className={({ isActive }) =>
              isActive ? 'nav-item active' : 'nav-item'
            }
          >
            더보기 효율
          </NavLink>

          <NavLink
            to="/market/items"
            className={({ isActive }) =>
              isActive ? 'nav-item active' : 'nav-item'
            }
          >
            아이템 시세
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
