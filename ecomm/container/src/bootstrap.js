/*
 * Alias given to the remote followed by the module to import,
 * which should have been exposed in the remote's webpack config
 */
import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from'cart/CartShow';

console.log('Container!');

const elProducts =  document.querySelector('#container-products');

if (elProducts) {
    mountProducts(elProducts);
}

const elCart =  document.querySelector('#container-cart');

if (elCart) {
    mountCart(elCart);
}
