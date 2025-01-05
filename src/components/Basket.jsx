import BasketContent from "./BasketContent";

const basketHasContent = true;
const showBasketContent = false;

const Basket = () => {
  if (!basketHasContent) {
    return (
      <div className="basket-section">
        <div className="basket-button basket-is-empty">
          <div className="basket-button-label">Voir le panier</div>
        </div>
      </div>
    );
  }

  if (basketHasContent && !showBasketContent) {
    return (
      <div className="basket-section">
        <div className="basket-button basket-has-content">
          <div className="number-of-items-on-button">4</div>
          <div className="basket-button-label">Voir le panier</div>
          <div className="total-on-button">9,60 €</div>
        </div>
      </div>
    );
  }

  if (basketHasContent && showBasketContent) {
    return (
      <div className="basket-section">
        <BasketContent />

        <div className="basket-button basket-has-content">
          <div
            className="number-of-items-small"
            style={{ visibility: "hidden" }}
          >
            4
          </div>

          <div className="basket-button-label">Voir mon panier</div>
          <div className="total" style={{ visibility: "hidden" }}>
            9,60 €
          </div>
        </div>
      </div>
    );
  }
};

export default Basket;
