const MenuItem = (props) => {
  const { meal } = props;

  const { id, title, description, price, picture, popular } = meal;

  return (
    <div className="meal-box">
      <div className="meal-text">
        <div className="meal-title">{title}</div>
        {description && <div className="meal-description">{description} </div>}

        <div className="meal-details">
          <div className="meal-price">{price} </div>
          {popular && <div className="meal-popular"> Popular </div>}
        </div>
      </div>
      {picture && <div className="meal-picture">picture </div>}
    </div>
  );
};

export default MenuItem;
