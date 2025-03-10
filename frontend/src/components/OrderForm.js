import React, { useState } from "react";

const OrderForm = ({ orderApiUrl }) => {
  const [order, setOrder] = useState({ item: "", quantity: "" });

  const placeOrder = async () => {
    try {
      const response = await fetch(`${orderApiUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      <h2>Place Order</h2>
      <input
        type="text"
        placeholder="Item"
        value={order.item}
        onChange={(e) => setOrder({ ...order, item: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={order.quantity}
        onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
      />
      <button onClick={placeOrder}>Submit Order</button>
    </div>
  );
};

export default OrderForm;
