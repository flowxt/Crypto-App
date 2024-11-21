import axios from "axios";
import React, { useEffect, useState } from "react";
import PercentChange from "./PercentChange.js"; //

const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((res) => setHeaderData(res.data.data));
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img src="./assets/logo.png" alt="logo" /> Tour d'observation
          </h1>
        </li>
        <li>
          Crypto-Monnaies :{" "}
          {headerData && headerData.active_cryptocurrencies
            ? headerData.active_cryptocurrencies.toLocaleString()
            : " Chargement"}
        </li>
        <li>
          Marchés :{" "}
          {headerData && headerData.markets
            ? headerData.markets.toLocaleString()
            : " Chargement"}
        </li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Market Cap :
          {headerData &&
          headerData.market_cap_change_percentage_24h_usd !== undefined ? (
            <PercentChange
              percent={headerData.market_cap_change_percentage_24h_usd}
            />
          ) : (
            " Chargement"
          )}
        </li>
        <li>
          BTC dominance :{" "}
          {headerData && headerData.market_cap_percentage
            ? headerData.market_cap_percentage.btc.toFixed(1) + "%"
            : " Chargement"}
        </li>
        <li>
          SOL dominance :{" "}
          {headerData && headerData.market_cap_percentage
            ? headerData.market_cap_percentage.sol.toFixed(1) + "%"
            : " Chargement"}
        </li>
      </ul>
    </div>
  );
};

export default HeaderInfos;
