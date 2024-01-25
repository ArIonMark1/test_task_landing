// import { getPrice } from "./dataApi";
import * as ApiRequest from "./dataApi";
const dataApi = new ApiRequest();
console.log(dataApi);
const canvas = window.document.querySelector(".image-graph");

const context = canvas.getContext("2d");

//функції
const createLineChart = (xData, yData) => {
  const data = {
    labels: xData,
    datasets: [
      {
        ladel: "Global Price of Aluminium",
        data: yData,
        pointStyle: false,
        fill: true,
        borderWidth: 1,
      },
    ],
  }; // datasets
  const config = {
    type: "line",
    data: data,
  };
  let chart = new Chart(context, config);
};
// Отримання даних із сервера
axios
  .get(
    "https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo"
  )
  .then((response) => {
    const data = response.data.data;

    const xData = [];
    const yData = [];

    for (let i = data.length - 1; i > 0; i--) {
      if (data[i].value !== ".") {
        xData.push(data[i].date);
        yData.push(data[i].value);
      }
    }
    createLineChart(xData, yData);
  });
//
