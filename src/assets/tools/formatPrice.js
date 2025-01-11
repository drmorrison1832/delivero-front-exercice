function formatPrice(amount) {
  return Number(amount).toFixed(2).toString().replace(".", ",") + " €";
}

export default formatPrice;
