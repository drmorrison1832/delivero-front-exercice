import formatPrice from "../assets/tools/formatPrice";

const BasketMainButton = (props) => {
  const { basket, amountOfItems, totalAmount, setShowBasketDetails } = props;

  if (basket.length === 0) {
    return (
      <>
        <div className="basket-button basket-is-empty disabled-button">
          <div className="basket-button-label mobile-only">Voir le panier</div>
          <div className="basket-button-label desktop-only">
            Valider mon panier
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* Mobile */}
        <div
          className="basket-button enabled-button-mobile mobile-only"
          onClick={() => {
            setShowBasketDetails(true);
          }}
        >
          <div className="number-of-items-on-button">{amountOfItems}</div>
          <div className="basket-button-label">Valider mon panier</div>
          <div className="total-on-button">{formatPrice(totalAmount)} €</div>
        </div>
        {/* Computer */}
        <div className="basket-button enabled-button-desktop desktop-only ">
          Valider mon panier
        </div>
      </>
    );
  }
};

export default BasketMainButton;
