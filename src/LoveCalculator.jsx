import React, { useEffect, useState } from "react";

const LoveCalculator = () => {
  const [boyName, setBoyName] = useState("");
  const [girlName, setGirlName] = useState("");
  const [lovePercentage, setLovePercentage] = useState(null);
  const handleCalculateLove = () => {
    const love = Math.floor(Math.random() * 100);
    setLovePercentage(love);
  };
  const handleBoyNameChange = (e) => {
    console.log(e.target.value, "boy name");
    setBoyName(e.target.value);
  };
  const handleGirlNameChange = (e) => {
    setGirlName(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLovePercentage(null);
      clearTimeout(timer);
    }, [6000]);
  }, [lovePercentage]);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "4rem 3rem",
          boxShadow: "5px 5px 20px gray",
          borderRadius: "10px ",
        }}
      >
        <h2 style={{ textAlign: "center", color: "red" }}> Love Calculator</h2>
        <input
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "3px",
            fontSize: "1.2rem",
          }}
          type="text"
          placeholder="Enter boy name "
          value={boyName}
          onChange={handleBoyNameChange}
        />
        <input
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "3px",
            fontSize: "1.2rem",
            border: "0.5px solid gray",
          }}
          type="text"
          placeholder="Enter girl name"
          value={girlName}
          onChange={handleGirlNameChange}
        />
        <button
          onClick={handleCalculateLove}
          style={{
            padding: "0.5rem 0",
            fontSize: "1.2rem",
            border: "0.5px solid gray",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Calculate Love
        </button>
        {lovePercentage && (
          <div>
            {boyName.toUpperCase()}+{girlName.toUpperCase()}={lovePercentage}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveCalculator;
