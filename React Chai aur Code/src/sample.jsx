

function Details(user) {

  return (
    <>
      <p>{user.name}</p>
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
          <p key={product.id}>{product.name}</p>
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