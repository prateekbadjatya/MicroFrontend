import faker from "faker";

const mount = el => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

/* 
  Context/Situation #1

  1. We are running this file in development in isloation
  2. We are using our local index.html file
  3. Which definelty has an element with an id of dev-products
  4. We want to imediatley render our app into that  element
*/
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  //Assumning or container doesn't have an element with id dev-products
  if (el) {
    // we are probably running is isolation
    mount(el);
  }
}

/* 
    Context/Situation #2
    
    1. We are running this file in development or production
     through a container app
    2.No guranterr that an element with an id of dev-products exists
    3. We do not want try to imediatley ender the app
*/

export { mount };
