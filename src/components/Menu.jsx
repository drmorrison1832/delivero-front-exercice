import Category from "./Category";

const Menu = (props) => {
  const { categories, basket, setBasket } = props;

  return (
    <div className="menu">
      {categories.map((category, index) => {
        if (category.meals.length > 0) {
          return (
            <div className="category-section" key={index}>
              <Category
                category={category}
                basket={basket}
                setBasket={setBasket}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;
