import { mount as productMount } from "products/ProductsIndex";

import { mount as cartMount } from "cart/CartShow";

//   products: 'products@http://localhost:8081/remoteEntry.js'
//key products always be same as container webapck products
// in import

productMount(document.querySelector("#my-products"));

cartMount(document.querySelector("#my-cart"));
/// ProductsIndex must be same as remote expose config file key

// products@http://localhost:8081/remoteEntry.js
// products must be same as remote name property
console.log("container");
