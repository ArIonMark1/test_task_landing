// const canvas = window.document.querySelector(".image-graph");

// const context = canvas.getContext("2d");

// //функції
// const createLineChart = (xData, yData) => {
//   const data = {
//     labels: xData,
//     datasets: [
//       {
//         ladel: "Global Price of Aluminium",
//         data: yData,
//         pointStyle: false,
//         fill: true,
//         borderWidth: 1,
//       },
//     ],
//   }; // datasets
//   const config = {
//     type: "line",
//     data: data,
//   };
//   let chart = new Chart(context, config);
// };
// // Отримання даних із сервера
// axios
//   .get(
//     "https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo"
//   )
//   .then((response) => {
//     const data = response.data.data;

//     const xData = [];
//     const yData = [];

//     for (let i = data.length - 1; i > 0; i--) {
//       if (data[i].value !== ".") {
//         xData.push(data[i].date);
//         yData.push(data[i].value);
//       }
//     }
//     createLineChart(xData, yData);
//   });
// //
// ##################################################################################
// ##################################################################################
const canvas = window.document.querySelector(".image-graph");

const context = canvas.getContext("2d");

const config = {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        labels: "Students",
        data: [6, 8, 13, 15, 10],
        backgroundColor: ["white"],
        borderColor: ["red", "tomato", "coral", "chartreuse", "greenyellow"],
        borderWidth: 3,
      },
    ],
  }, // labels - масив, дані на осі X / datasets - об'єкт стилі
  options: {},
}; // type - тип діаграми, data - дані які використовуємо для побудови графіка, options - для зміни налаштувань

const myChart = new Chart(context, config); // передаємо блок канвас і об'єкт

// заливка
// fill: linear-gradient(180deg, rgba(21, 227, 181, 0.10) 0%, rgba(21, 227, 181, 0.00) 100%);
