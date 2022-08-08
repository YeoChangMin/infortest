import "./MenuList.css";

function MenuList({ menus, group }) {
  const groupTitle = group.title;
  const menu = menus.filter((menu) => menu.group === groupTitle);
  console.log(menu);
  return (
    <>
      {menu.map((menu) => (
        <div className="menu_list" key={menu.id}>
          <div className="menu_state">
            <input type="checkbox" />
          </div>
          <div className="menu_info">
            <div className="menu_name">{menu.title}</div>
            {menu.intro ? <div className="menu_intro">{menu.intro}</div> : null}
            <div className="menu_price">{menu.price}</div>
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
