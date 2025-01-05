import MenuItem from "./MenuItem";

const Category = (props) => {
  const { category } = props;
  const categoryName = category.name;
  const meals = category.meals;

  return (
    <>
      <h2>{categoryName}</h2>
      {meals.map((meal) => {
        return <MenuItem meal={meal} key={meal.id} />;
      })}
    </>
  );
};

export default Category;

{
}
