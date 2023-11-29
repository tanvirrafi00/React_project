const RenderMenu = ({ title, price, img, desc }) => {
  return (
    <div className="food_card">
      <img className="food_img" src={img} alt="" />

      <div className="food_description">
        <div className="food_card_header">
          <h1 className="food_name">{title}</h1>
          <p className="price">{price}</p>
        </div>
        <p className="food_info">{desc}</p>
      </div>
    </div>
  );
};

export default RenderMenu;
