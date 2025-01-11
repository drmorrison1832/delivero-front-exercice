import formatPrice from "../assets/tools/formatPrice";

const BasketCheckOutCalculation = (props) => {
  const { otherFees, basket } = props;

  const subtotal = basket.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="basket-checkout-calculations">
      <div className="basket-checkout-line">
        <div>Sous-total</div>
        <div>{formatPrice(subtotal)}</div>
      </div>
      {otherFees.map((fee, index) => {
        const amount = fee.price ? fee.price : fee.ratio * subtotal;

        return (
          <div key={index} className="basket-checkout-line">
            <div> {fee.name}</div>
            <div>{formatPrice(amount)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BasketCheckOutCalculation;
