import React, { useState, useEffect } from "react";
// import millify from "millify";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend
);

const ChartComp = ({ data }) => {
  const [labelNew, setLabelNew] = useState([]);
  const [priceDataNew, setPriceDataNew] = useState([]);

  useEffect(() => {
    if (data?.history) {
      const labels = data.history.slice(0, 100).map((item) => {
        const date = new Date(item.timestamp * 1000);
        return date.toLocaleString("en-US");
      });
      const prices = data.history
        .slice(0, 100)
        .map((item) => parseFloat(item.price).toFixed(2));
      setLabelNew(labels);
      setPriceDataNew(prices);
    }
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: `This Graph Shows Variation of Price VS Time`,
        color: "white",
      },
      color: {
        enabled: true,
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "gray",
          // display: false,
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "gray",
          // display: false,
        },
      },
    },
  };

  const chartData = {
    labels: labelNew,
    datasets: [
      {
        label: "Time",
        data: priceDataNew,
        borderColor: "#facc15",
        color: "white",
        fill: false,
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default ChartComp;
