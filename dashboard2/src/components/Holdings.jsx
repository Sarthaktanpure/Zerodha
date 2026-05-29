import React, { useState, useEffect } from "react";
import { api } from "../lib/api";
import { VerticalGraph } from "./VerticalGraph";
import { DoughnutChart } from "./DoughnoutChart";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/allHoldings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Dynamic Portfolio Calculations
  const totalInvestment = holdings.reduce((sum, stock) => sum + (stock.avg * stock.qty), 0);
  const currentValue = holdings.reduce((sum, stock) => sum + (stock.price * stock.qty), 0);
  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment > 0 ? (pnl / totalInvestment) * 100 : 0;

  const isProfit = pnl >= 0;
  const pnlClass = isProfit ? "profit" : "loss";

  const formatCurrency = (val) => {
    return val.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Chart Data Preparation
  const chartLabels = holdings.map((stock) => stock.name);

  const verticalChartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "LTP (Last Traded Price)",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(65, 132, 243, 0.75)",
        borderColor: "#4184f3",
        borderWidth: 1,
      },
      {
        label: "Avg Cost",
        data: holdings.map((stock) => stock.avg),
        backgroundColor: "rgba(245, 104, 52, 0.75)",
        borderColor: "rgb(245, 104, 52)",
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Value (₹)",
        data: holdings.map((stock) => stock.price * stock.qty),
        backgroundColor: [
          "rgba(65, 132, 243, 0.7)",
          "rgba(76, 175, 80, 0.7)",
          "rgba(255, 152, 0, 0.7)",
          "rgba(156, 39, 176, 0.7)",
          "rgba(233, 30, 99, 0.7)",
          "rgba(0, 188, 212, 0.7)",
          "rgba(255, 235, 59, 0.7)",
          "rgba(121, 85, 72, 0.7)",
          "rgba(96, 125, 139, 0.7)",
          "rgba(33, 150, 243, 0.7)",
          "rgba(0, 150, 136, 0.7)",
          "rgba(139, 195, 74, 0.7)",
          "rgba(255, 87, 34, 0.7)",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>
      {loading ? (
        <div className="empty-state">
          <p>Loading portfolio holdings...</p>
        </div>
      ) : holdings.length === 0 ? (
        <div className="empty-state">
          <p>No holdings available yet.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg cost</th>
                <th>LTP</th>
                <th>Cur val</th>
                <th>P&L</th>
                <th>Net chg</th>
                <th>Day chg</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((stock, index) => {
                const currVal = stock.price * stock.qty;
                const stockPnl = currVal - stock.avg * stock.qty;
                const stockIsProfit = stockPnl >= 0.0;
                const profClass = stockIsProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{currVal.toFixed(2)}</td>
                    <td className={profClass}>
                      {stockPnl.toFixed(2)}
                    </td>
                    <td className={profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="row" style={{ marginTop: "30px", borderTop: "1px solid #eef2f7", paddingTop: "20px" }}>
        <div className="col">
          <h5 style={{ fontWeight: "400", fontSize: "1.4rem", color: "#474747" }}>
            {formatCurrency(totalInvestment)}
          </h5>
          <p style={{ color: "#9c9c9c", fontSize: "0.8rem", margin: "4px 0 0" }}>Total investment</p>
        </div>
        <div className="col">
          <h5 style={{ fontWeight: "400", fontSize: "1.4rem", color: "#474747" }}>
            {formatCurrency(currentValue)}
          </h5>
          <p style={{ color: "#9c9c9c", fontSize: "0.8rem", margin: "4px 0 0" }}>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnlClass} style={{ fontWeight: "500", fontSize: "1.4rem", color: isProfit ? "#4caf50" : "#ff5722" }}>
            {pnl >= 0 ? "+" : ""}{formatCurrency(pnl)} ({pnlPercent >= 0 ? "+" : ""}{pnlPercent.toFixed(2)}%)
          </h5>
          <p style={{ color: "#9c9c9c", fontSize: "0.8rem", margin: "4px 0 0" }}>P&L</p>
        </div>
      </div>

      {holdings.length > 0 && (
        <div className="holdings-charts-container" style={{ marginTop: "40px" }}>
          <h4 style={{ marginBottom: "24px", color: "#334155", fontWeight: "600" }}>Portfolio Visualization</h4>
          <div className="charts-row" style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
            <div className="chart-wrapper" style={{ flex: "1 1 45%", minWidth: "280px", background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #edf2f7", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
              <h5 style={{ textAlign: "center", marginBottom: "15px", color: "#64748b", fontSize: "0.95rem" }}>Asset Weightings (Market Value)</h5>
              <div style={{ maxHeight: "300px", display: "flex", justifyContent: "center" }}>
                <DoughnutChart data={doughnutChartData} />
              </div>
            </div>
            <div className="chart-wrapper" style={{ flex: "1 1 45%", minWidth: "280px", background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #edf2f7", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
              <h5 style={{ textAlign: "center", marginBottom: "15px", color: "#64748b", fontSize: "0.95rem" }}>LTP vs. Cost Comparison</h5>
              <div style={{ height: "300px" }}>
                <VerticalGraph data={verticalChartData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Holdings;
