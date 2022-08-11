import { useCallback, useEffect, useState } from "react";
import AddCategory from "./AddCategory";

import MenuList from "./MenuList";
import "./MenuManage.css";

function MenuManage({ storeData }) {
  const [loading, setLoading] = useState(true);
  const [storeInfo, setStoreInfo] = useState({});

  const getStoreInfo = useCallback(() => {
    setStoreInfo(() => storeData);
    setLoading(false);
  }, [storeData]);

  useEffect(() => {
    getStoreInfo();
  }, [getStoreInfo]);
  console.log(storeInfo);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="MenuManage">
          <h4 className="rep_title">가게 대표이미지</h4>
          <div className="rep_img">
            <img src="./img/icon/추가아이콘.png" alt="추가" />
          </div>
          <div className="category_title">
            <h4>메뉴 그룹</h4>
          </div>
          <ul className="category_bar">
            <AddCategory className="category_item" />
            {storeInfo.categorys.map((category) => (
              <li className="category_item" key={category.id}>
                {category.category_name}
              </li>
            ))}
          </ul>
          <h4 className="category_list_title">메뉴 목록</h4>
          {storeInfo.categorys.map((category) => (
            <div className="category_contater" key={category.id}>
              <div className="category_name">{category.category_name}</div>
              <MenuList menus={storeInfo.menus} category={category} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MenuManage;
