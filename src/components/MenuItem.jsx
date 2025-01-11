import formatPrice from "../assets/tools/formatPrice";

const MenuItem = (props) => {
  const { meal, basket, setBasket } = props;

  let { title, description, price, picture, popular } = meal;

  function addItemToBasket(itemToAdd) {
    console.log("addItemToBasket...");
    const newBasket = [...basket];

    let foundInBasket = newBasket.find((item) => item.id === itemToAdd.id);

    foundInBasket
      ? foundInBasket.quantity++
      : newBasket.push({ ...itemToAdd, quantity: 1 });

    setBasket(newBasket);
  }

  return (
    <div
      className="meal-box"
      onClick={() => {
        addItemToBasket(meal);
      }}
    >
      <div className="meal-text">
        <div className="meal-title">{title}</div>
        {description && <div className="meal-description">{description}</div>}

        <div className="meal-details">
          <div className="meal-price">{formatPrice(price)}</div>
          {popular && (
            <div className="meal-popular">
              <i className="icon-STAR_FILL"></i> Popular
            </div>
          )}
        </div>
      </div>
      {picture && (
        <div className="meal-photo-container">
          <img className="meal-photo" src={picture} alt="Meal photo" />
        </div>
      )}
    </div>
  );
};

export default MenuItem;
