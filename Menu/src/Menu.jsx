/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import RenderMenu from "./RenderMenu";
const Menu = ({ menu }) => {
  console.log(menu);
  return (
    <>
      <div className="food_container">
        {menu.map((item) => {
          return <RenderMenu key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Menu;
