import React, { useEffect, useState } from "react";
import "./CryptoTable.css";

const CryptoTable = () => {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    symbol: "",
    price: "",
  });

  useEffect(() => {
    const fetchCryptoData = async () => {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      const data = await response.json();
      setCryptos(data.data);
      setFilteredCryptos(data.data);
    };

    fetchCryptoData();
  }, []);

  useEffect(() => {
    const filtered = cryptos.filter((crypto) => {
      return (
        crypto.name.toLowerCase().includes(search.name.toLowerCase()) &&
        crypto.symbol.toLowerCase().includes(search.symbol.toLowerCase()) &&
        (search.price === "" || parseFloat(crypto.price_usd) <= parseFloat(search.price))
      );
    });
    setFilteredCryptos(filtered);
  }, [search, cryptos]);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearch((prevSearch) => ({
      ...prevSearch,
      [name]: value,
    }));
  };

  return (
    <section className="crypto-table-section">
      <h1 className="crypto-title">Discover ZCRYPTO 🌍 | Your Gateway to the Crypto World!</h1>
      <div className="search-form">
        <input
          type="text"
          name="name"
          placeholder="Search by Coin Name"
          value={search.name}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="symbol"
          placeholder="Search by Symbol"
          value={search.symbol}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Max Price"
          value={search.price}
          onChange={handleSearchChange}
        />
      </div>

      <div className="table-container">
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Coin Name</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
              <th>24h Change (%)</th>
              <th>Market Cap (USD)</th>
              <th>Volume 24h</th>
              <th>Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            {filteredCryptos.map((crypto) => (
              <tr key={crypto.id}>
                <td>{crypto.rank}</td>
                <td>{crypto.name}</td>
                <td>{crypto.symbol}</td>
                <td>${parseFloat(crypto.price_usd).toFixed(2)}</td>
                <td className={crypto.percent_change_24h < 0 ? "negative" : "positive"}>
                  {crypto.percent_change_24h}%
                </td>
                <td>${parseFloat(crypto.market_cap_usd).toFixed(2)}</td>
                <td>${parseFloat(crypto.volume24).toFixed(2)}</td>
                <td>{parseFloat(crypto.csupply).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CryptoTable;
