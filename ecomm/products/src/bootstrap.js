import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;

}

// Context/Situation #1 
// We are running this file in development in isolation
// We are using our local index.html file
// Which definitly has an element with an id of 'dev-products'
// We want to imediatly render our app into that element

if (process.env.NODE_ENV === 'development') {
    // Check whether we are running products by it self 
    // (assume that if it has an element 'dev-products' then we are running products)
    const el =  document.querySelector('#dev-products')
    if(el) {
        // We are probably running products in isolation
        mount(el);
    }
}

// Context/Situation #2
// We are running this file in development or production
// through the containeer app
// no giuarantee that an element with id of 'dev-products' exists
// We do not want to try to imedialty render our app into that element
export { mount };
