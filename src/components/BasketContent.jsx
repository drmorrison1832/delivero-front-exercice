import BasketItemsList from "./BasketItemsList";
import BasketCheckOutCalculation from "./BasketCheckOutCalculation";

const BasketContent = (props) => {
  const { setShowBasketContent, basket, setBasket, otherFees, totalAmount } =
    props;

  if (basket.length === 0) {
    return <div className="basket-details">Votre panier est vide</div>;
  }
  return (
    <div className="basket-details">
      <div
        className="close-modal"
        onClick={() => {
          setShowBasketContent(false);
        }}
      >
        X
      </div>
      <BasketItemsList basket={basket} setBasket={setBasket} />
      <BasketCheckOutCalculation basket={basket} otherFees={otherFees} />

      <div className="basket-total-section">
        <div className="basket-total-line">
          <div>Total</div>
          <div>{totalAmount.toFixed(2).toString().replace(".", ",")} €</div>
        </div>
      </div>
    </div>
  );
};

export default BasketContent;
