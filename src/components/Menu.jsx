import Category from "./Category";

const Menu = (props) => {
  const { categories } = props;

  return (
    <div>
      {categories.map((category, index) => {
        if (category.meals.length > 0) {
          return (
            <div className="category-section" key={index}>
              <Category category={category} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;

// {categories.map((category, index) => {
//     return (
//       <div key={index}>
//         <Category category={category} />
//       </div>
//     );
//   })}
