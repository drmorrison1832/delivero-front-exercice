import BasketDetails from "./BasketDetails";
import BasketMainButton from "./BasketMainButton";
import { useState } from "react";

const Basket = (props) => {
  const { basket, setBasket } = props;

  const [showBasketDetails, setShowBasketDetails] = useState(false);

  // otherFees would come from the server request
  const [otherFees, setOtherFees] = useState([
    { name: "Frais de livraison", ratio: 0.1 },
    { name: "Taxe alimentaire", ratio: 0.01 },
    { name: "Réduction spéciale", price: -5 },
  ]);

  // Global basket variables
  const amountOfItems = basket.reduce((acc, item) => acc + item.quantity, 0);

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

  return (
    <div className="basket-section">
      <BasketDetails
        basket={basket}
        setBasket={setBasket}
        showBasketDetails={showBasketDetails}
        setShowBasketDetails={setShowBasketDetails}
        otherFees={otherFees}
        totalAmount={totalAmount}
      />
      <BasketMainButton
        basket={basket}
        amountOfItems={amountOfItems}
        totalAmount={totalAmount}
        setShowBasketDetails={setShowBasketDetails}
      />
    </div>
  );
};

export default Basket;
