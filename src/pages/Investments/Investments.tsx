import React from 'react';
import "../Investments/Investments.scss";

const Investments = () => {
  return (
    <div className="investmentContainer">
        <div className="investmentHeader">Investments</div>
        <div className="totalAssetDetails">
            <div className="totalAssetValueTag">Total asset value</div>
            <span className="totalAssetValue">Rs. 1200000</span>
            <span className="watchlistIcon">Icon</span>
            <div className="changeInValueSection"><span>2.35% (+1.50%)</span>from last week</div>
        </div>
        <div className="portfolioHeaderTag">My portfolio</div>
        <div className="carouselSection">
            Carousel cards
        </div>
        <div className="investmentOptionsSection">
            <span className="investmentOption">
                <span className="investmentIcon">Icon</span>
                <span className="">Stocks</span>
            </span>
            <span className="investmentOption">Gold</span>
            <span className="investmentOption">Mutual funds</span>
            <span className="investmentOption">NPS</span>
            <span className="investmentOption">PPF</span>
            <span className="investmentOption">EPF</span>
            <span className="investmentOption">Fixed deposits</span>
        </div>
        <div>Watchlist</div>
        <div className="watchlistContainer">
            <div>Stock details</div>
        </div>
    </div>
  )
}

export default Investments