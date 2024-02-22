import React from "react";
// React-Redux
import { useSelector } from "react-redux";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Chart
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SearchChart = () => {
  const loading = useSelector((state) => state.loading.loading);
  const forecastWeather = useSelector((state) => state.weather.forecastWeather);

  const chartData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Temperature",
        data: forecastWeather ? forecastWeather.slice(0, 5).map((forecase) => { return forecase.main.temp }) : [-1.0, -0.6, -0.1, 0.6, 1.2],
        borderColor: "#FFE993",
        backgroundColor: "#FFE993",
      },
      {
        label: "Humidity",
        data: forecastWeather ? forecastWeather.slice(0, 5).map((forecase) => { return forecase.main.humidity }) : [70, 75, 80, 95, 100],
        borderColor: "#B8DAFF",
        backgroundColor: "#B8DAFF",
      },
      {
        label: "Wind Speed",
        data: forecastWeather ? forecastWeather.slice(0, 5).map((forecase) => { return forecase.wind.speed }) : [3.0, 2.5, 5.0, 3.0, 2.5],
        borderColor: "#B5B1FF",
        backgroundColor: "#B5B1FF",
      },
    ],
  };

  // Chart Option
  const chartOptions = {
    spanGaps: true,

    interaction: {
      mode: "index",
    },

    plugins: {
      legend: { display: false },
    },

    scales: {
      x: {
        grid: {
          color: "#ffffff",
        },
        ticks: { color: "#fff" },
      },
      y: {
        grid: {
          color: "#ffffff",
        },
        ticks: { color: "#fff" },
      },
    },
  };

  if (loading) {
    return (
      <div className="searchChart">
        <Skeleton width={"280px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
        <Skeleton width={"100%"} height={"600px"} baseColor="#222" highlightColor="#fff" />
      </div>
    );
  }

  return (
    <div className="searchChart">
      <h2>Quick Check-up the chart</h2>
      <Line className="chart" options={chartOptions} data={chartData} />
    </div>
  );
};

export default SearchChart;