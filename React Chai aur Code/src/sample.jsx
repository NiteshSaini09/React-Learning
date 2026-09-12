function Details(user) {
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
    </>
  );
}

let products = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Laptop" },
];
let elements = [<h1>I am h1</h1>, <h2>i am h2</h2>, <p>i am p</p>, <hr />];

function Sample() {
  return (
    <>
      <Details name="Mahendra" age="28"></Details>
      <div>
        {products.map((product) => (
          <h1 key={product.id}>{product.name}</h1>
        ))}
      </div>
      <div>
        {elements.map((e) => (
          <div>{e}</div>
        ))}
      </div>
    </>
  );
}

export default Sample