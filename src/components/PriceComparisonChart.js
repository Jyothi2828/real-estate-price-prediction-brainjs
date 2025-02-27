import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables, ChartDataLabels);

const PredictedPrice = ({ predictedPrice, actualPrice }) => {
  const formatPrice = (price) => {
    return `$ ${Math.round(price).toLocaleString()}`;
  };

  // Message based on price difference
  const getPriceDifferenceMessage = () => {
    if (!predictedPrice && !actualPrice) {
      return { message: "Enter details to know the difference.", color: "#FF0000" };
    }

    if (!actualPrice && predictedPrice) {
      return { message: "Actual price is missing for comparison.", color: "#FF0000" };
    }

    if (!actualPrice || !predictedPrice) {
      return { message: "Enter details to know the difference.", color: "#213555" };
    }

    const difference = Math.abs(actualPrice - predictedPrice);

    if (difference < 100) {
      return { message: "Very Close", color: "#28A745" };
    } else if (difference < 200) {
      return { message: "Moderate Variation", color: "#FFC107" };
    } else if (difference < 300) {
      return { message: "Significant Variation", color: "#FD7E14" };
    } else {
      return { message: "Talk to Agent", color: "#DC3545" };
    }
  };

  const { message, color } = getPriceDifferenceMessage();

  const data = {
    labels: ["Actual Price", "Predicted Price"],
    datasets: [
      {
        label: "Price",
        data: [actualPrice || 0, predictedPrice || 0],
        backgroundColor: ["#D3D3D3", "#D9EAFD"],
        borderColor: ["#A9A9A9", "#0056b3"],
        borderWidth: 2,
        barThickness: 50, // Increased bar width
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#0F0F0F", 
        fontWeight: "bold",
        anchor: "center",
        align: "center",
        formatter: (value) => formatPrice(value),
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          callback: (value) => formatPrice(value),
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 40,
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{
        position: "relative",
        width: "500px", // Adjusted width
        height: "350px", // Adjusted height
        margin: "0 auto",
        padding: "10px",
      }}
    >
      <h2 style={{ margin: 0, marginBottom: "20px" }}>
        Price Comparison
        <span style={{ fontSize: "12px", fontWeight: "bold", color: color, marginLeft: "10px" }}>
          {message}
        </span>
      </h2>

      <div style={{ position: "relative", height: "100%" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PredictedPrice;