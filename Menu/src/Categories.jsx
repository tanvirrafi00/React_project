/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Categories = ({ categories,filterItems }) => {
  console.log(categories);
  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
