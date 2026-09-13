import Product from "./Product.jsx";

function ProductList(products) {
  return (
    <div>
        {console.log(products.products)}
      {products.products.map((product) => (
        <Product name={product.name} desc={product.desc} />
      ))}
    </div>
  );
}
export default ProductList;
