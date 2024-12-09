import React, { useState,useEffect  } from "react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import Chart from "react-apexcharts";
import MutualkeyIndicators from "../Mutualkeyindicator/Mutualkeyindicator";
import './Mutualcandlestick.css'
import Navbar from "../../Navbar/Navbar";

const options = {
  xaxis: {
    type: "datetime",
  },
};

const series = [
  {
    data: [
      { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
      { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
      { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
      { x: new Date(1538784000000), y: [6635.65, 6641, 6629.67, 6632.24] }, // Negative movement
      { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6623.47] },
      { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6625.31] },
      { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6625.02] },
      { x: new Date(1538791200000), y: [6627, 6625.62, 6584.22, 6603.02] }, // Negative movement
      { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6602.01] },
      { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6605.02] },
      { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6605.91] },
      { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6610] },
      { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6613] },
      { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6621.95] },
      { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6617.67] }, // Negative movement
      { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
      { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
      { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6622.45] },
      { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
      { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6617.53] }, // Negative movement
      { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6613.19] },
      { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6618] },
      { x: new Date(1538818200000), y: [6620, 6625.1, 6615, 6620] },
      { x: new Date(1538820000000), y: [6622, 6629.9, 6618.1, 6627.5] },
      { x: new Date(1538821800000), y: [6627.5, 6632.3, 6619.8, 6628.9] },
      { x: new Date(1538823600000), y: [6628.9, 6634.1, 6621.6, 6631.2] },
      { x: new Date(1538825400000), y: [6631.2, 6635.8, 6623.4, 6632.7] },
      { x: new Date(1538827200000), y: [6633.7, 6640.2, 6628.1, 6640.6] },
      { x: new Date(1538829000000), y: [6639.6, 6642.5, 6632.7, 6640.2] },
      { x: new Date(1538830800000), y: [6638.2, 6644.8, 6630.3, 6639.5] },
      { x: new Date(1538832600000), y: [6639.5, 6645, 6631.4, 6637.9] },
      { x: new Date(1538834400000), y: [6639.9, 6646.2, 6632.2, 6641.4] },
      { x: new Date(1538836200000), y: [6641.4, 6649.1, 6635.1, 6644.5] }, // Negative movement
      { x: new Date(1538838000000), y: [6645.8, 6652.3, 6641.6, 6649.5] },
      { x: new Date(1538839800000), y: [6648.5, 6654.7, 6644.3, 6651.6] },
      { x: new Date(1538841600000), y: [6651.6, 6658.9, 6648.2, 6656.1] },
      { x: new Date(1538843400000), y: [6656.1, 6661.5, 6652.4, 6659.6] },
      { x: new Date(1538845200000), y: [6659.6, 6665, 6654.3, 6661.8] },
      { x: new Date(1538847000000), y: [6661.8, 6668.5, 6659.2, 6666.7] },
      { x: new Date(1538848800000), y: [6667, 6672.6, 6662.9, 6671.4] },
      { x: new Date(1538850600000), y: [6671.4, 6677.8, 6669.1, 6674.9] },
      { x: new Date(1538852400000), y: [6674.9, 6681.3, 6670.2, 6679.4] }, // Negative movement
      { x: new Date(1538854200000), y: [6678.4, 6684.9, 6675.1, 6683.2] },
      { x: new Date(1538856000000), y: [6683.2, 6688.4, 6679.5, 6687.1] },
      { x: new Date(1538857800000), y: [6687.1, 6691.7, 6680.2, 6689.5] },
      { x: new Date(1538859600000), y: [6688.9, 6693.5, 6684.9, 6692.2] },
      { x: new Date(1538861400000), y: [6692.2, 6697.4, 6688.1, 6695.3] },
      { x: new Date(1538863200000), y: [6695.3, 6701.8, 6691.3, 6699.5] },
      { x: new Date(1538865000000), y: [6699.5, 6705.1, 6692.4, 6703.5] },
      { x: new Date(1538866800000), y: [6703.5, 6708.5, 6697.2, 6705.6] },
      { x: new Date(1538868600000), y: [6705.6, 6712.4, 6701.5, 6709.7] },
      { x: new Date(1538870400000), y: [6709.7, 6715.8, 6703.4, 6713.2] },
      { x: new Date(1538872200000), y: [6713.2, 6718.3, 6707.7, 6715.8] },
      { x: new Date(1538874000000), y: [6715.8, 6722.5, 6709.8, 6719.2] },
      { x: new Date(1538875800000), y: [6719.2, 6724.3, 6714.3, 6722.9] },
      { x: new Date(1538877600000), y: [6722.9, 6727.4, 6716.8, 6725.4] },
      { x: new Date(1538879400000), y: [6725.4, 6731.2, 6721.2, 6729.7] },
      { x: new Date(1538881200000), y: [6729.7, 6735.4, 6724.4, 6733.9] },
      { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6613] },
      { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6621.95] },
      { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6617.67] }, // Negative movement
      { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
      { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
      { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6622.45] },
      { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
      { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6617.53] }, // Negative movement
      { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6613.19] },
      { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6618] },
      { x: new Date(1538818200000), y: [6620, 6625.1, 6615, 6620] },
      { x: new Date(1538820000000), y: [6622, 6629.9, 6618.1, 6627.5] },
      { x: new Date(1538821800000), y: [6627.5, 6632.3, 6619.8, 6628.9] },
      { x: new Date(1538823600000), y: [6628.9, 6634.1, 6621.6, 6631.2] },
      { x: new Date(1538825400000), y: [6631.2, 6635.8, 6623.4, 6632.7] },
      { x: new Date(1538827200000), y: [6633.7, 6640.2, 6628.1, 6640.6] },
      { x: new Date(1538829000000), y: [6639.6, 6642.5, 6632.7, 6640.2] },
      { x: new Date(1538830800000), y: [6638.2, 6644.8, 6630.3, 6639.5] },
      { x: new Date(1538832600000), y: [6639.5, 6645, 6631.4, 6637.9] },
      { x: new Date(1538834400000), y: [6639.9, 6646.2, 6632.2, 6641.4] },
      { x: new Date(1538836200000), y: [6641.4, 6649.1, 6635.1, 6644.5] }, // Negative movement
      { x: new Date(1538838000000), y: [6645.8, 6652.3, 6641.6, 6649.5] },
      { x: new Date(1538839800000), y: [6648.5, 6654.7, 6644.3, 6651.6] },
      { x: new Date(1538841600000), y: [6651.6, 6658.9, 6648.2, 6656.1] },
      { x: new Date(1538843400000), y: [6656.1, 6661.5, 6652.4, 6659.6] },
      { x: new Date(1538845200000), y: [6659.6, 6665, 6654.3, 6661.8] },
      { x: new Date(1538847000000), y: [6661.8, 6668.5, 6659.2, 6666.7] },
      { x: new Date(1538848800000), y: [6667, 6672.6, 6662.9, 6671.4] },
      { x: new Date(1538850600000), y: [6671.4, 6677.8, 6669.1, 6674.9] },
      { x: new Date(1538852400000), y: [6674.9, 6681.3, 6670.2, 6679.4] }, // Negative movement
      { x: new Date(1538854200000), y: [6678.4, 6684.9, 6675.1, 6683.2] },
      { x: new Date(1538856000000), y: [6683.2, 6688.4, 6679.5, 6687.1] },
      { x: new Date(1538857800000), y: [6687.1, 6691.7, 6680.2, 6689.5] },
      { x: new Date(1538859600000), y: [6688.9, 6693.5, 6684.9, 6692.2] },
      { x: new Date(1538861400000), y: [6692.2, 6697.4, 6688.1, 6695.3] },
      { x: new Date(1538863200000), y: [6695.3, 6701.8, 6691.3, 6699.5] },
      { x: new Date(1538865000000), y: [6699.5, 6705.1, 6692.4, 6703.5] },
      { x: new Date(1538866800000), y: [6703.5, 6708.5, 6697.2, 6705.6] },
      { x: new Date(1538868600000), y: [6705.6, 6712.4, 6701.5, 6709.7] },
      { x: new Date(1538870400000), y: [6709.7, 6715.8, 6703.4, 6713.2] },
      { x: new Date(1538872200000), y: [6713.2, 6718.3, 6707.7, 6715.8] },
      { x: new Date(1538874000000), y: [6715.8, 6722.5, 6709.8, 6719.2] },
      { x: new Date(1538875800000), y: [6719.2, 6724.3, 6714.3, 6722.9] },
      { x: new Date(1538877600000), y: [6722.9, 6727.4, 6716.8, 6725.4] },
      { x: new Date(1538879400000), y: [6725.4, 6731.2, 6721.2, 6729.7] },
      { x: new Date(1538881200000), y: [6729.7, 6735.4, 6724.4, 6733.9] },
      { x: new Date(1538784000000), y: [6635.65, 6641, 6629.67, 6632.24] }, // Negative movement
      { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6623.47] },
      { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6625.31] },
      { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6625.02] },
      { x: new Date(1538791200000), y: [6627, 6625.62, 6584.22, 6603.02] }, // Negative movement
      { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6602.01] },
    
    ],
  },
];

const timeframes = ["1D", "1W", "1M", "6M", "1Y", "5Y", "Max"];

export const MutualCandleStickChart = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D");




  const [financialData, setFinancialData] = useState({
    price: "₹127.89",
    percentage: "+0.85%",
    lastUpdated: "05 Dec, 2024",
  });

  // Example: Function to simulate data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new data
      const newPrice = (Math.random() * 100 + 100).toFixed(2);
      const newPercentage = ((Math.random() * 2 - 1) * 1.5).toFixed(2); // Random between -1.5% and +1.5%
      const now = new Date();
      const newLastUpdated = now.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      setFinancialData({
        price: `₹${newPrice}`,
        percentage: `${newPercentage > 0 ? "+" : ""}${newPercentage}%`,
        lastUpdated: newLastUpdated,
      });
    }, 5000); // Update every 5 seconds (example)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  return (
   <div>
<div className="mutualcandletop">
      {/* Left Section */}
      <div className="mutualcandletop__left">
        <h2 className="mutualcandletop__title">Motilal Oswal Midcap Fund Direct Growth</h2>
        <div className="mutualcandletop__tags">
          <button className="mutualcandletop__tag">Mid Cap</button>
          <button className="mutualcandletop__tag">Very High</button>
        </div>
      </div>

      <div className="mutualcandletop__right">
        <h2 className="mutualcandletop__price">{financialData.price}</h2>
        <p
          className={`mutualcandletop__percentage ${
            parseFloat(financialData.percentage) >= 0
              ? "mutualcandletop__percentage--positive"
              : "mutualcandletop__percentage--negative"
          }`}
        >
          {financialData.percentage}
        </p>
        <p className="mutualcandletop__last-updated">
          Last updated: {financialData.lastUpdated}
        </p>
      </div>
  
    </div>
    <div className="candlestick-chart-container">
      <Card className="MuiCard-root">
        {/* Timeframe selector */}
        <div className="timeframe-selector">
          {timeframes.map((timeframe) => (
            <span
              key={timeframe}
              className={`timeframe-item ${selectedTimeframe === timeframe ? "active" : ""}`}
              onClick={() => setSelectedTimeframe(timeframe)}
            >
              {timeframe}
            </span>
          ))}
        </div>
        <Divider />
        <CardContent>
          <h1>Motilal Oswal Midecap Fund NAV Chart</h1>
          <Chart
  options={options}
  series={series}
  type="candlestick"
  width="100%" // Make the width responsive
  height={window.innerWidth <= 480 ? 250 : 320} // Adjust height dynamically based on screen width
/>

        </CardContent>
      </Card>
    </div>
    <MutualkeyIndicators/>
    <Navbar/>
    </div>
  );
};
