import React from 'react';
import "../Investments/Investments.scss";
import { FaEye } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";

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
                <div className="investmentType">Gold</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">Mutual Fund</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">NPS</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">PPF</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">EPF</div>
            </div>
            <div className="investmentOption">
                <div className="investmentIcon"><FaEye size={35}/></div>
                <div className="investmentType">FD</div>
            </div>
            
        </div>
        <div className="watchlistHeader">Watchlist</div>
        <span className="addWatchlistItem"><IoMdAddCircleOutline style={{verticalAlign:"middle"}} size={35}/></span>
        <div className="watchlistContainer">
            <div className="watchlistOption">
                <div className="watchlistIconSection">1</div>
                <div className="watchlistInvestmentNameSection">
                    <div className="watchlistInvestmentName">Stocks</div>
                    <div className="lastUpadtedValue"><MdUpdate size={30} style={{verticalAlign:"middle"}} />: 8:42 AM </div>

                </div>
                <div className="watchlistInvestmentValueSection">3</div>
            </div>

            <div className="watchlistOption">
                <div className="watchlistIconSection">1</div>
                <div className="watchlistInvestmentNameSection">
                    <div className="watchlistInvestmentName">Gold</div>
                    <div className="lastUpadtedValue"><MdUpdate size={30} style={{verticalAlign:"middle"}} />: 8:42 AM </div>

                </div>
                <div className="watchlistInvestmentValueSection">3</div>
            </div>
            <div className="watchlistOption">
                <div className="watchlistIconSection">1</div>
                <div className="watchlistInvestmentNameSection">
                    <div className="watchlistInvestmentName">Mutual Funds</div>
                    <div className="lastUpadtedValue"><MdUpdate size={30} style={{verticalAlign:"middle"}} />: 8:42 AM </div>

                </div>
                <div className="watchlistInvestmentValueSection">3</div>
            </div>
            <div className="watchlistOption">
                <div className="watchlistIconSection">1</div>
                <div className="watchlistInvestmentNameSection">
                    <div className="watchlistInvestmentName">National Pension Scheme</div>
                    <div className="lastUpadtedValue"><MdUpdate size={30} style={{verticalAlign:"middle"}} />: 8:42 AM </div>

                </div>
                <div className="watchlistInvestmentValueSection">3</div>
            </div>
            <div className="watchlistOption">
                <div className="watchlistIconSection">1</div>
                <div className="watchlistInvestmentNameSection">
                    <div className="watchlistInvestmentName">Public Provident Fund</div>
                    <div className="lastUpadtedValue"><MdUpdate size={30} style={{verticalAlign:"middle"}} />: 8:42 AM </div>

                </div>
                <div className="watchlistInvestmentValueSection">3</div>
            </div>
            <div className="watchlistOption">
                <div className="watchlistIconSection">1</div>
                <div className="watchlistInvestmentNameSection">
                    <div className="watchlistInvestmentName">Employee Provident Fund</div>
                    <div className="lastUpadtedValue"><MdUpdate size={30} style={{verticalAlign:"middle"}} />: 8:42 AM </div>

                </div>
                <div className="watchlistInvestmentValueSection">3</div>
            </div>

            <div className="watchlistOption">
                <div className="watchlistIconSection">1</div>
                <div className="watchlistInvestmentNameSection">
                    <div className="watchlistInvestmentName">Fixed Deposits</div>
                    <div className="lastUpadtedValue"><MdUpdate size={30} style={{verticalAlign:"middle"}} />: 8:42 AM </div>

                </div>
                <div className="watchlistInvestmentValueSection">3</div>
            </div>
        </div>
    </div>
  )
}

export default Investments