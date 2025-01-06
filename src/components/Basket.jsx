import BasketContent from "./BasketContent";
import { useState } from "react";

const Basket = (props) => {
  const { basket, setBasket } = props;

  const [showBasketContent, setShowBasketContent] = useState(false);

  const [otherFees, setOtherFees] = useState([
    { name: "Frais de livraison", ratio: 0.1 },
    { name: "Taxe alimentaire", ratio: 0.01 },
    { name: "Réduction spéciale", price: -5 },
  ]);

  const totalItems = basket.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = basket.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const totalFees = otherFees.reduce((acc, fee) => {
    if (fee.price) {
      return acc + fee.price;
    }
    return acc + fee.ratio * subtotal;
  }, 0);

  const totalAmount = subtotal + totalFees;

  const totalAmountFormatted = totalAmount
    .toFixed(2)
    .toString()
    .replace(".", ",");

  if (basket.length === 0) {
    return (
      <div className="basket-section">
        <div className="basket-button basket-is-empty">
          <div
            className="number-of-items-small"
            style={{ visibility: "hidden" }}
          >
            4
          </div>
          <div className="basket-button-label">Voir le panier</div>
          <div className="total" style={{ visibility: "hidden" }}>
            9,60 €
          </div>
        </div>
      </div>
    );
  }

  if (basket.length > 0 && !showBasketContent) {
    return (
      <div className="basket-section ">
        <div
          className="basket-button basket-has-content"
          onClick={() => {
            setShowBasketContent(true);
          }}
        >
          <div className="number-of-items-on-button">{totalItems}</div>
          <div className="basket-button-label">Voir le panier</div>
          <div className="total-on-button">{totalAmountFormatted} €</div>
        </div>
      </div>
    );
  }

  if (basket.length > 0 && showBasketContent) {
    return (
      <div className="basket-section">
        <BasketContent
          basket={basket}
          setBasket={setBasket}
          setShowBasketContent={setShowBasketContent}
          otherFees={otherFees}
          totalAmount={totalAmount}
        />
        <div className="basket-button basket-has-content">
          <div
            className="number-of-items-small"
            style={{ visibility: "hidden" }}
          >
            4
          </div>
          <div className="basket-button-label">Valider mon panier</div>
          <div className="total" style={{ visibility: "hidden" }}>
            9,60 €
          </div>
        </div>
      </div>
    );
  }
};

export default Basket;
