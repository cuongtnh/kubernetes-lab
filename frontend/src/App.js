import React, { useState, useEffect } from "react";
import OrderForm from "./components/OrderForm";
import PaymentForm from "./components/PaymentForm";
import Inventory from "./components/Inventory";

const BASE_URL = "http://localhost";
const API_URL_INVENTORY = BASE_URL + ":8082/inventory";
const API_URL_ORDER = BASE_URL + ":8080/order";
const API_URL_PAYMENT =   BASE_URL + ":8081/pay";


const App = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("API URL:", API_URL_INVENTORY); // Debugging line
    console.log(process.env.REACT_APP_API_URL_INVENTORY); 
    fetch(`${API_URL_INVENTORY}`)
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching inventory:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>OPSWAT Coffee Machine</h1>
      <Inventory inventory={inventory} />
      <OrderForm orderApiUrl={API_URL_ORDER} />
      <PaymentForm payApiUrl={API_URL_PAYMENT} />
    </div>
  );
};

export default App;
