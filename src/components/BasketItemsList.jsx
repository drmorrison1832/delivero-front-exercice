import { v4 as uuidv4 } from "uuid";
import formatPrice from "../assets/tools/formatPrice";

const BasketItemsList = (props) => {
  const { basket, setBasket } = props;

  function modifyBasketContent(itemToUpdate, times) {
    const newBasket = [...basket];

    let foundInBasket = newBasket.find((item) => item.id === itemToUpdate.id);
    let foundInBasketIndex = newBasket.findIndex(
      (item) => item.id === itemToUpdate.id
    );
    if (times === 1) {
      foundInBasket
        ? foundInBasket.quantity++
        : newBasket.push({ ...itemToUpdate, quantity: 1 });
    }
    if (times === -1) {
      foundInBasket.quantity--;
      foundInBasket.quantity === 0 && newBasket.splice(foundInBasketIndex, 1);
    }
    setBasket(newBasket);
  }

  return (
    <div className="basket-items-list">
      {basket.map((item) => {
        return (
          <div className="basket-item-line" key={uuidv4()}>
            <span className="amount-changer">
              <i
                className="icon-minus"
                onClick={() => {
                  modifyBasketContent(item, -1);
                }}
              ></i>
              <span>{item.quantity}</span>
              <i
                className="icon-plus"
                onClick={() => {
                  modifyBasketContent(item, +1);
                }}
              ></i>
            </span>
            <span className="item-name">{item.title}</span>
            <div className="item-price">
              {formatPrice(item.quantity * item.price)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BasketItemsList;
