import React, { useState } from 'react';
import './App.css';
import AdComponent from './AdComponent'; // <-- Import Ad component


function App() {
const [units, setUnits] = useState('');
const [bill, setBill] = useState(null);

const calculateMPBill = (units) => {
  let energyCharge = 0;

  if (units <= 50) {
    energyCharge += units * 4.13;
  } else if (units <= 150) {
    energyCharge += 50 * 4.13;
    energyCharge += (units - 50) * 5.05;
  } else if (units <= 300) {
    energyCharge += 50 * 4.13;
    energyCharge += 100 * 5.05;
    energyCharge += (units - 150) * 6.45;
  } else {
    energyCharge += 50 * 4.13;
    energyCharge += 100 * 5.05;
    energyCharge += 150 * 6.45;
    energyCharge += (units - 300) * 6.65;
  }

  let fixedCharge = 0;
  if (units <= 50) {
    fixedCharge = 64;
  } else if (units <= 150) {
    fixedCharge = 109;
  } else if (units <= 300) {
    fixedCharge = 240;
  } else {
    fixedCharge = 64 + 190 + 240 + 250;
  }

  let electricityDuty = energyCharge * 0.10;
  const totalBill = energyCharge + fixedCharge + electricityDuty;
  return Math.round(totalBill * 100) / 100;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const parsedUnits = parseFloat(units);
  if (!isNaN(parsedUnits) && parsedUnits >= 0) {
    setBill(calculateMPBill(parsedUnits));
  } else {
    setBill(null);
  }
};


return (
  <div className="app-wrapper">
    <div className="ad-top"><AdComponent adSlot="1234567890" /></div>

    <div className="layout">
      <div className="ad-left"><AdComponent adSlot="1234567891" /></div>

      <div className="main-content">
      <div className="container">
      <h1>MP Electricity Bill Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder="Enter consumed units"
          min="0"
          required
        />
        <button type="submit">Calculate Bill</button>
      </form>
      {bill !== null && (
        <div className="result">
          <h2>Approximate Bill: ₹ {bill}</h2>
        </div>
      )}
    </div>
      </div>

      <div className="ad-right"><AdComponent adSlot="1234567892" /></div>
    </div>

    <div className="ad-bottom"><AdComponent adSlot="1234567893" /></div>
  </div>
);
}

export default App;
