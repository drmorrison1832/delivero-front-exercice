const BasketContent = () => {
  return (
    <div className="basket-details">
      <div className="close-modal">X</div>
      <div className="basket-items-list">
        <div className="basket-item">
          <div>
            <span className="amount-changer">+ o -</span> Brunch vegan
          </div>
          <div>25,00 €</div>
        </div>
      </div>
      <div className="basket-checkout-calculations">
        <div className="basket-checkout-line">
          <div>Sous-total</div>
          <div>25,00 €</div>
        </div>
        <div className="basket-checkout-line">
          <div> Frais de livraison</div>
          <div>2,50 €</div>
        </div>
      </div>
      <div className="basket-total-section">
        <div className="basket-total-line">
          <div>Total</div>
          <div>27,50 €</div>
        </div>
      </div>
    </div>
  );
};

export default BasketContent;
