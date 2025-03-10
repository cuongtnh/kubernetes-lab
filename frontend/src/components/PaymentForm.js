import React, { useState } from "react";

const PaymentForm = ({ payApiUrl }) => {
  const [payment, setPayment] = useState({ orderId: "", amount: "" });

  const processPayment = async () => {
    try {
      const response = await fetch(`${payApiUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      });
      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div>
      <h2>Process Payment</h2>
      <input
        type="text"
        placeholder="Order ID"
        value={payment.orderId}
        onChange={(e) => setPayment({ ...payment, orderId: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={payment.amount}
        onChange={(e) => setPayment({ ...payment, amount: e.target.value })}
      />
      <button onClick={processPayment}>Submit Payment</button>
    </div>
  );
};

export default PaymentForm;
