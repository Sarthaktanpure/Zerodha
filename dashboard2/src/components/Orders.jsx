import React, { useEffect, useState } from "react";

import { api } from "../lib/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Unable to load orders");
      });
  }, []);

  return (
    <div className="orders-page">
      <h3>Orders ({orders.length})</h3>
      {error ? <p className="page-error">{error}</p> : null}

      {orders.length === 0 ? (
        <div className="empty-state">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Side</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td className={order.mode === "BUY" ? "profit" : "loss"}>
                    {order.mode}
                  </td>
                  <td>{order.qty}</td>
                  <td>{Number(order.price).toFixed(2)}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
