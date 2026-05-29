import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { api } from "../lib/api";
import "./BuyPopup.css";

const BuyPopup = ({ id, onClose }) => {
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

  const handleBuyClick = (e) => {
    e.preventDefault();
    api
      .post("/newOrder", {
        name: id,
        qty,
        price,
        mode: "BUY",
      })
      .finally(() => {
        onClose();
      });
  };

  return createPortal(
    <div
      className="buy-popup-backdrop"
      role="presentation"
      onClick={handleCancelClick}
    >
      <div
        className="buy-popup-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="buy-popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="buy-popup-header">
          <div>
            <p className="buy-popup-kicker">Place order</p>
            <h2 id="buy-popup-title">Buy {id || "Stock"}</h2>
          </div>

          <button
            type="button"
            className="buy-popup-close"
            aria-label="Close buy popup"
            onClick={handleCancelClick}
          >
            x
          </button>
        </div>

        <form className="buy-popup-form" onSubmit={handleBuyClick}>
          <label className="buy-popup-field">
            <span>Quantity</span>
            <input
              type="number"
              min="1"
              placeholder="Enter quantity"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </label>

          <label className="buy-popup-field">
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

          <p className="buy-popup-margin">Margin required INR 140.65</p>

          <div className="buy-popup-actions">
            <button
              type="button"
              className="buy-popup-button buy-popup-button-secondary"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="buy-popup-button buy-popup-button-primary"
            >
              Buy
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default BuyPopup;
