import MenuList from "./MenuList";
import "./MenuManage.css";

function MenuManage({ ownerInfo }) {
  const store = ownerInfo.store[0];

  console.log(store.groups);
  return (
    <div className="MenuManage">
      <h4 className="category_title">가게 대표이미지</h4>
      <div className="rep_img">
        <img src="./img/icon/추가아이콘.png" alt="추가" />
      </div>
      <h4 className="category_title">메뉴 그룹</h4>
      <ul className="group_bar">
        {store.groups.map((group) => (
          <li className="group_item" key={group.id}>
            {group.title}
          </li>
        ))}
      </ul>
      {store.groups.map((group) => (
        <div className="group_list" key={group.id}>
          <div className="group_title">{group.title}</div>
          <MenuList menus={store.menus} group={group} />
        </div>
      ))}
    </div>
  );
}

export default MenuManage;
