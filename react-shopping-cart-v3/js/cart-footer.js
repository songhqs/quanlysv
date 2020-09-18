function CartFooter(props) {
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
        <li>
            Subtotal{" "}
            <span>
              
              {props.subTotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </li>
          <li>
            Tax{" "}
            <span>
              {props.tax.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </li>
          <li className="total">
            Total{" "}
            <span>
              {(props.subTotal + props.tax).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}
