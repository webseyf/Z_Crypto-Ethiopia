import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CryptoList.css";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]); // Holds currently displayed cryptos
  const [allCryptos, setAllCryptos] = useState([]); // Holds all fetched cryptos
  const [loading, setLoading] = useState(false); // Loading state for the API
  const [error, setError] = useState(null); // Error state

  const INITIAL_COUNT = 6; // Number of cryptos to show initially
  const LOAD_MORE_COUNT = 4; // Number of cryptos to load on mobile

  // Fetch cryptocurrency data
  useEffect(() => {
    const fetchCryptos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.coinlore.net/api/tickers/?start=0&limit=100"
        );
        setAllCryptos(response.data.data); // Store all cryptos
        setCryptos(response.data.data.slice(0, INITIAL_COUNT)); // Display initial set
      } catch (err) {
        setError("Failed to load cryptocurrency data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCryptos();
  }, []);

  // Load more cryptocurrencies
  const loadMore = () => {
    const nextCount = cryptos.length + LOAD_MORE_COUNT;
    setCryptos(allCryptos.slice(0, nextCount));
  };

  return (
    <section className="crypto-list-section" id="discover">
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
             <a href="/listZcrypto">Load More</a>
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default CryptoList;
