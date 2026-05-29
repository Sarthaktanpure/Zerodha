import React from "react";
import { useState, useEffect } from "react";
// import { positions } from "../data/data";
import { api } from "../lib/api";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    api.get("/allPositions").then((res) => {
      setPositions(res.data);
    });
  }, []);
  return (
    <div>
      <h3>Positions ({positions.length})</h3>
      {positions.length === 0 ? (
        <div className="empty-state">
          <p>No positions available yet.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>chg.</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((stock, index) => {
                const currVal = stock.price * stock.qty;
                const isProfit = currVal - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";
                return (
                  <tr key={index}>
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={profClass}>
                      {(currVal - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Positions;
