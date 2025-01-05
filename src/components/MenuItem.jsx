const MenuItem = (props) => {
  const { meal } = props;

  const { id, title, description, price, picture, popular } = meal;

  const formatedPrice = Number(price).toFixed(2).toString().replace(".", ",");

  console.log();

  return (
    <div className="meal-box">
      <div className="meal-text">
        <div className="meal-title">{title}</div>
        {description && <div className="meal-description">{description} </div>}

        <div className="meal-details">
          <div className="meal-price">{formatedPrice} €</div>
          {popular && <div className="meal-popular"> Popular </div>}
        </div>
      </div>
      {picture && (
        <div className="meal-photo-container">
          <img className="meal-photo" src={picture} alt="" />
        </div>
      )}
    </div>
  );
};

export default MenuItem;
