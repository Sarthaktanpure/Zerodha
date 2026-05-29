import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { api } from "../lib/api";
import "./SellPopup.css";

const SellPopup = ({ id, onClose }) => {
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const handleCancelClick = () => {
    setQty("");
    setPrice("");
    onClose();
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setQty("");
        setPrice("");
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleSellClick = (e) => {
    e.preventDefault();
    api
      .post("/sell", {
        name: id,
        qty,
        price,
        side: "SELL",
      })
      .finally(() => {
        onClose();
      });
  };

  return createPortal(
    <div
      className="sell-popup-backdrop"
      role="presentation"
      onClick={handleCancelClick}
    >
      <div
        className="sell-popup-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sell-popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sell-popup-header">
          <div>
            <p className="sell-popup-kicker">Place order</p>
            <h2 id="sell-popup-title">Sell {id || "Stock"}</h2>
          </div>

          <button
            type="button"
            className="sell-popup-close"
            aria-label="Close sell popup"
            onClick={handleCancelClick}
          >
            
          </button>
        </div>

        <form className="sell-popup-form" onSubmit={handleSellClick}>
          <label className="sell-popup-field">
            <span>Quantity</span>
            <input
              type="number"
              min="1"
              placeholder="Enter quantity"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </label>

          <label className="sell-popup-field">
            <span>Price</span>
            <input
              type="number"
              min="0"
              step="0.05"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <p className="sell-popup-margin">Margin required INR 140.65</p>

          <div className="sell-popup-actions">
            <button
              type="button"
              className="sell-popup-button sell-popup-button-secondary"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="sell-popup-button sell-popup-button-primary"
            >
              Sell
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default SellPopup;
