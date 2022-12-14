import "./MenuList.css";

function MenuList({ menus, category }) {
  const categoryMenu = menus.filter(
    (menu) => menu.category === category.category_name
  );

  return (
    <>
      {categoryMenu.map((menu) => (
        <div className="menu_list" key={menu.id}>
          <div className="menu_state">
            <input type="checkbox" />
          </div>
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
        </div>
      ))}
    </>
  );
}

export default MenuList;
