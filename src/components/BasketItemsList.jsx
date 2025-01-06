import { v4 as uuidv4 } from "uuid";

const BasketItemsList = (props) => {
  const { basket, setBasket } = props;

  return (
    <div className="basket-items-list">
      {basket.map((item, index) => {
        return (
          <div className="basket-item-line" key={uuidv4()}>
            <span className="amount-changer">
              <i
                className="icon-minus"
                onClick={() => {
                  const newBasket = [...basket];
                  item.quantity--;
                  if (item.quantity === 0) {
                    newBasket.splice(index, 1);
                  }
                  setBasket(newBasket);
                }}
              ></i>
              <span>{item.quantity}</span>
              <i
                className="icon-plus"
                onClick={() => {
                  const newBasket = [...basket];
                  item.quantity++;
                  setBasket(newBasket);
                }}
              ></i>
            </span>
            <span className="item-name">{item.title}</span>
            <div className="item-price">
              {(item.quantity * item.price)
                .toFixed(2)
                .toString()
                .replace(".", ",")}{" "}
              €
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BasketItemsList;

// if (item.quantity > 1) {
//     newBasket[index].quantity--;
// } else {
//     newBasket.splice(index, 1);
// }
