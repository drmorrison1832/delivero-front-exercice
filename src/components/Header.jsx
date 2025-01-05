const Header = (props) => {
  const { restaurantInfo } = props;
  const { name, description, picture } = restaurantInfo;

  return (
    <header className="header">
      <div className="header-top">
        <div className="deliveroo-logo">deliveroo</div>
      </div>
      <div className="header bottom">
        <div className="restaurant-photo-container">
          <img className="restaurant-photo" src={picture} alt="" />
        </div>
        <div className="restaurant-text">
          <div className="restaurant-name">{name}</div>
          <div className="restaurant-description">{description}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
