import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import "./GraphPopup.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const GraphPopup = ({ id, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const stockId = id || "Stock";
  const chartData = useMemo(() => {
    const base = 100 + stockId.length * 10;
    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: stockId,
          data: [
            base * 0.96,
            base * 0.99,
            base * 1.02,
            base * 1.01,
            base * 1.05,
            base * 1.08,
            base * 1.06,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.75)",
            "rgba(54, 162, 235, 0.75)",
            "rgba(255, 206, 86, 0.75)",
            "rgba(75, 192, 192, 0.75)",
            "rgba(153, 102, 255, 0.75)",
            "rgba(255, 159, 64, 0.75)",
            "rgba(0, 188, 212, 0.75)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(0, 188, 212, 1)",
          ],
          borderRadius: 6,
          borderWidth: 1,
        },
      ],
    };
  }, [stockId]);

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            color: "rgba(148, 163, 184, 0.14)",
          },
          ticks: {
            color: "#6b7280",
          },
        },
        y: {
          grid: {
            color: "rgba(148, 163, 184, 0.14)",
          },
          ticks: {
            color: "#6b7280",
          },
        },
      },
    }),
    []
  );

  return createPortal(
    <div
      className="graph-popup-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="graph-popup-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="graph-popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="graph-popup-header">
          <div>
            <p className="graph-popup-kicker">Market view</p>
            <h2 id="graph-popup-title">{stockId} graph</h2>
          </div>

          <button
            type="button"
            className="graph-popup-close"
            aria-label="Close graph popup"
            onClick={onClose}
          >
            x
          </button>
        </div>

        <div className="graph-popup-summary">
          <div>
            <span>Trend</span>
            <strong>Upward bias</strong>
          </div>
          <div>
            <span>Range</span>
            <strong>7 sessions</strong>
          </div>
          <div>
            <span>Signal</span>
            <strong>Intraday</strong>
          </div>
        </div>

        <div className="graph-popup-chart">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GraphPopup;
