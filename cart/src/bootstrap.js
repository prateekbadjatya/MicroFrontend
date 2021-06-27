import faker from "faker";

const mount = el => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart. </div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  //Assumning or container doesn't have an element with id dev-products
  if (el) {
    // we are probably running is isolation
    mount(el);
  }
}

export { mount };
