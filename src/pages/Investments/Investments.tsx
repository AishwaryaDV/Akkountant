import React from 'react';
import "../Investments/Investments.scss";
import { FaEye } from "react-icons/fa";

const Investments = () => {
  return (
    <div className="investmentContainer">
        <div className="investmentHeader">Investments</div>
        <div className="totalAssetDetails">
            <div className="totalAssetValueTag">Total asset value</div>
            <span className="totalAssetValue">Rs. 1200000</span>
            <span ><FaEye className="watchlistIcon" size={40}/></span>
            <div className="changeInValueSection"><span className="changedPercentValue">2.35% (+1.50%)</span> from last week</div>
        </div>
        <div className="portfolioHeaderTag">My portfolio</div>
        <div className="carouselSection">
            Carousel cards
        </div>
        <div className="sectorsHeader">Sectors</div>
        <div className="investmentOptionsSection">
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">Stocks</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">Stocks</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">Stocks</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">Stocks</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">Stocks</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">Stocks</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">Stocks</div>
            </div>
            
        </div>
        <div className="watchlistHeader">Watchlist</div>
        <div className="watchlistContainer">
            <div className="watchlistOption">Stocks</div>
            <div className="watchlistOption">Stocks</div>
            <div className="watchlistOption">Stocks</div>
            <div className="watchlistOption">Stocks</div>
            <div className="watchlistOption">Stocks</div>
            <div className="watchlistOption">Stocks</div>
            <div className="watchlistOption">Stocks</div>
        </div>
    </div>
  )
}

export default Investments