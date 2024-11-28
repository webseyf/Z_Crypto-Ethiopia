import React from "react";
import "../styles/Earn.css";

const Earn = () => {
  return (
    <section className="passive-income-section">
      <div className="centering">
        <div className="content-container">
          <h2>Earn Passive Income with ZCRYPTO</h2>
          <p>
            Take control of your financial future by earning a passive income with
            ZCRYPTO. Start staking, mining, or investing in cryptocurrencies to
            watch your wealth grow effortlessly over time. Join thousands of users
            making their money work for them in the new crypto economy.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="image-container">
          <img src="/trade.png" alt="Passive Income Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Earn;
