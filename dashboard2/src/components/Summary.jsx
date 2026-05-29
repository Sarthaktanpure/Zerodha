import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../lib/api";
import { DoughnutChart } from "./DoughnoutChart";

const Summary = () => {
  const { user } = useAuth();
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

  // Margin data (standard placeholder with dynamic structure)
  const marginAvailable = 3740.12; 
  const marginUsed = 0.00;
  const openingBalance = 3740.12;

  // Dynamic Portfolio Calculations
  const totalInvestment = holdings.reduce((sum, stock) => sum + (stock.avg * stock.qty), 0);
  const currentValue = holdings.reduce((sum, stock) => sum + (stock.price * stock.qty), 0);
  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment > 0 ? (pnl / totalInvestment) * 100 : 0;

  // Formatter for 'k' (thousands) notation e.g., 31.43k
  const formatK = (val) => {
    const isNegative = val < 0;
    const absVal = Math.abs(val);
    let formatted = "";
    if (absVal >= 1000) {
      formatted = (absVal / 1000).toFixed(2) + "k";
    } else {
      formatted = absVal.toFixed(2);
    }
    return (isNegative ? "-" : "") + formatted;
  };

  // Chart Data Preparation
  const chartLabels = holdings.map((stock) => stock.name);
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
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <div className="username">
        <h6 style={{ fontSize: "1.4rem", fontWeight: "500", color: "#334155" }}>
          Hi, {user?.name || "User"}!
        </h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p style={{ fontWeight: "600", color: "#64748b", margin: 0 }}>Equity</p>
        </span>

        <div className="data" style={{ marginTop: "15px" }}>
          <div className="first">
            <h3>{formatK(marginAvailable)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{formatK(marginUsed)}</span>
            </p>
            <p>
              Opening balance <span>{formatK(openingBalance)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p style={{ fontWeight: "600", color: "#64748b", margin: 0 }}>
            Holdings ({loading ? "..." : holdings.length})
          </p>
        </span>

        {loading ? (
          <div style={{ padding: "20px 0", color: "#94a3b8" }}>Loading holdings...</div>
        ) : holdings.length === 0 ? (
          <div style={{ padding: "20px 0", color: "#94a3b8" }}>No holdings in your portfolio.</div>
        ) : (
          <div className="summary-holdings-container" style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "center", marginTop: "15px" }}>
            <div className="data" style={{ flex: "1 1 300px", margin: 0 }}>
              <div className="first">
                <h3 className={pnl >= 0 ? "profit" : "loss"} style={{ color: pnl >= 0 ? "#4caf50" : "#ff5722" }}>
                  {formatK(pnl)}{" "}
                  <small style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                    {pnlPercent >= 0 ? "+" : ""}{pnlPercent.toFixed(2)}%
                  </small>
                </h3>
                <p>P&L</p>
              </div>
              <hr />

              <div className="second">
                <p>
                  Current Value <span>{formatK(currentValue)}</span>
                </p>
                <p>
                  Investment <span>{formatK(totalInvestment)}</span>
                </p>
              </div>
            </div>

            <div className="summary-chart-wrapper" style={{ flex: "1 1 200px", maxWidth: "240px", maxHeight: "240px", display: "flex", justifyContent: "center" }}>
              <DoughnutChart data={doughnutChartData} />
            </div>
          </div>
        )}
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
