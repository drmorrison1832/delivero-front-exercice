const MenuItem = (props) => {
  const { meal, basket, setBasket } = props;

  const { id, title, description, price, picture, popular } = meal;

  const formatedPrice = Number(price).toFixed(2).toString().replace(".", ",");

  function addToBasket() {
    const newBasket = [...basket];
    const index = newBasket.findIndex((item) => item.id === id);
    if (index === -1) {
      newBasket.push({ id: id, title: title, price: price, quantity: 1 });
    } else {
      newBasket[index].quantity++;
    }
    setBasket(newBasket);
  }

  return (
    <div className="meal-box" onClick={addToBasket}>
      <div className="meal-text">
        <div className="meal-title">{title}</div>
        {description && <div className="meal-description">{description} </div>}

        <div className="meal-details">
          <div className="meal-price">{formatedPrice} €</div>
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
