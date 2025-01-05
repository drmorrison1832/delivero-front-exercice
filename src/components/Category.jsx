import MenuItem from "./MenuItem";

const Category = (props) => {
  const { category } = props;
  const categoryName = category.name;
  const meals = category.meals;

  return (
    <>
      <div className="category-name">{categoryName}</div>
      <div className="category-meals">
        {meals.map((meal) => {
          return <MenuItem meal={meal} key={meal.id} />;
        })}
      </div>
    </>
  );
};

export default Category;

{
}
