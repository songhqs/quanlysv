const PRODUCTS = [
  {
    id: 1,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 1000,
    quantity: 20,
  },
  {
    id: 2,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
  },
  {
    id: 3,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
  },
  {
    id: 4,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 1000,
    quantity: 20,
  },
];


function App() {
  const [products, setProducts] = React.useState(PRODUCTS);

  const taxPercent = 0.1; // Thuế = 10% subTotal
  let numberItems = 0;
  let subTotal = 0;

  // Tính tổng số sản phẩm và tổng tiền
  for (const product of products) {
    numberItems += product.quantity;
    subTotal += product.price * product.quantity;
  }
  let tax = subTotal * taxPercent;

  // Tạo 1 mảng mới giống hệt mảng cũ
  function addProduct() {

    const newProducts = [...products];

    // Thêm phần tử vào mảng mới
    newProducts.push({
      id: 8,
      name: "Laptop DELL 3",
      description: "Description 2",
      image: "https://via.placeholder.com/200x150",
      price: 120.32,
      quantity: 11,
    });

    // Cập nhật state
    setProducts(newProducts);
  }




  function clear() {
    setProducts([
      {
        id: 1,
        name: "Laptop DELL 1 ",
        description: "Description 1",
        image: "https://via.placeholder.com/200x150",
        price: 13,
        quantity: 1122,
      },
      {
        id: 2,
        name: "Laptop Apple",
        description: "Description 2",
        image: "https://via.placeholder.com/200x150",
        price: 5,
        quantity: 99.9,
      },
    ]);
  }

  //lọc ra SP thứ id và xóa sp thứ id=id

  function removeProduct(productId) {
    const newProducts = products.filter((product) => product.id != productId);
    setProducts(newProducts);
  }

  return (
    <main>
      <CartHeader
        numberItems={numberItems}
        title="Shopping Cart"
        numberItems={numberItems}
        addProduct={addProduct}
      />

      <CartBody products={products} removeProduct={removeProduct}
      />

      <CartFooter subTotal={subTotal} tax={tax} />

      <button onClick={clear}>Clear Cart</button>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


