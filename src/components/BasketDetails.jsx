import BasketItemsList from "./BasketItemsList";
import BasketCheckOutCalculation from "./BasketCheckOutCalculation";

const BasketDetails = (props) => {
  const {
    showBasketDetails,
    setShowBasketDetails,
    basket,
    setBasket,
    otherFees,
    totalAmount,
  } = props;

  console.log("showBasketDetails", showBasketDetails);

  if (basket.length === 0) {
    return (
      <div className="basket-details desktop-only">Votre panier est vide</div>
    );
  } else {
    return (
      <div
        className={
          showBasketDetails ? "basket-details" : "basket-details desktop-only"
        }
      >
        <div
          className="mobile-only"
          onClick={() => {
            setShowBasketDetails(false);
          }}
        >
          X
        </div>
        <BasketItemsList basket={basket} setBasket={setBasket} />
        <hr></hr>
        <BasketCheckOutCalculation basket={basket} otherFees={otherFees} />
        <hr></hr>
        <div className="basket-total-section">
          <div className="basket-total-line">
            <div>Total</div>
            <div>{totalAmount.toFixed(2).toString().replace(".", ",")} €</div>
          </div>
        </div>
      </div>
    );
  }
};

export default BasketDetails;
