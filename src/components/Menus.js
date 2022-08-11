import { Link } from "react-router-dom";
import "./Menus.css";

function Menus({ store, category }) {
  const categoryMenu = store.menus.filter((menu) => menu.category === category);
  console.log(store);
  return (
    <>
      {categoryMenu.map((menu) => (
        <Link
          to={`/store/detail/${menu.id}`}
          state={{ menu: menu, store: store }}
          className="menu_list"
          key={menu.id}
        >
          <div className="menu_info">
            <div className="menu_name">{menu.menu_name}</div>
            {menu.menu_brief_description ? (
              <div className="menu_menu_brief_description">
                {menu.menu_brief_description}
              </div>
            ) : null}
            <div className="menu_price">{menu.menu_price}</div>
          </div>
          <div className="menu_img">
            {menu.imgFile ? <img src={menu.imgFile} alt="메뉴이미지" /> : null}
          </div>
        </Link>
      ))}
    </>
  );
}

export default Menus;
