import React from "react";
import { useState } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import BuyPopup from "./BuyPopup";
import SellPopup from "./SellPopup";
import GraphPopup from "./GraphPopup";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg. infy, base, nifty fut weekly, gold mcx "
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
        <ul className="list">
          {watchlist.map((stock, idx) => {
            return <WatchListItem stock={stock} key={idx} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListAction, setWatchListAction] = useState(false);

  const handleMouseEnter = () => {
    setWatchListAction(true);
  };

  const handleMouseExit = () => {
    setWatchListAction(false);
  };

  const handleToggleClick = (e) => {
    // Prevent toggling if user clicks on the action buttons themselves
    if (e.target.closest(".actions")) {
      return;
    }
    setWatchListAction(!showWatchListAction);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      onClick={handleToggleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const [activePopup, setActivePopup] = useState(null);
  const handleBtnBuyClick = () => {
    setActivePopup("buy");
  };
  const handleBtnSellClick = () => {
    setActivePopup("sell");
  };
  const handleBtnGraphClick = () => {
    setActivePopup("graph");
  };
  const handleClosePopup = () => {
    setActivePopup(null);
  };
  return (
      <span className="actions">
      {activePopup === "buy" && <BuyPopup id={uid} onClose={handleClosePopup} />}
      {activePopup === "sell" && <SellPopup id={uid} onClose={handleClosePopup} />}
      {activePopup === "graph" && <GraphPopup id={uid} onClose={handleClosePopup} />}
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button type="button" className="buy" onClick={handleBtnBuyClick}>
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="sell (s)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button type="button" className="sell" onClick={handleBtnSellClick}>
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button type="button" className="action" onClick={handleBtnGraphClick}>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button type="button" className="more">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
