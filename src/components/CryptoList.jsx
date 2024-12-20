import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CryptoList.css";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [allCryptos, setAllCryptos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const INITIAL_COUNT = 6;
  const LOAD_MORE_COUNT = 4;

  useEffect(() => {
    const fetchCryptos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.coinlore.net/api/tickers/?start=0&limit=100"
        );
        setAllCryptos(response.data.data);
        setCryptos(response.data.data.slice(0, INITIAL_COUNT));
      } catch (err) {
        setError("Failed to load cryptocurrency data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCryptos();
  }, []);

  const loadMore = () => {
    const nextCount = cryptos.length + LOAD_MORE_COUNT;
    setCryptos(allCryptos.slice(0, nextCount));
  };

  return (
    <section className="crypto-list-section" id="discover">
      <div className="yes">
      <h2>Top Cryptocurrencies</h2>
      {loading ? (
        <p className="loading-message">Loading cryptocurrencies...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          <div className="crypto-cards-container">
            {cryptos.map((crypto) => (
              <div key={crypto.id} className="crypto-card">
                <h3>{crypto.name}</h3>
                <p>
                  <strong>Symbol:</strong> {crypto.symbol}
                </p>
                <p>
                  <strong>Rank:</strong> {crypto.rank}
                </p>
                <p>
                  <strong>Price (USD):</strong> ${parseFloat(crypto.price_usd).toFixed(2)}
                </p>
                <p>
                  <strong>Change (24h):</strong>{" "}
                  <span
                    className={
                      parseFloat(crypto.percent_change_24h) >= 0
                        ? "positive-change"
                        : "negative-change"
                    }
                  >
                    {crypto.percent_change_24h}%
                  </span>
                </p>
                <p>
                  <strong>Market Cap:</strong> ${crypto.market_cap_usd}
                </p>
              </div>
            ))}
          </div>
          {cryptos.length < allCryptos.length && (
            <button className="load-more-button" onClick={loadMore}>
              Load More
            </button>
          )} <br /><br /><br />
        
          <Link to="/listZcrypto" className="load-more-button">
          View All Cryptocurrencies
        </Link>
        </>
      )}
      </div>
    </section>
  );
};

export default CryptoList;
