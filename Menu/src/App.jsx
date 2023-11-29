/* eslint-disable no-unused-vars */
import { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];
function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="title">our menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </div>
    </>
  );
}

export default App;
