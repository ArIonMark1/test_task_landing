// export const getPrice = async () => {

//   return request;
// };

// console.log(getPrice());
const API_KEY = "API_KEYe4O8MC2DOQVE1QAQL12MWSPVGMMJ5NZQ";
const container = document.querySelector(".grafic-img");

const searchOnForex =
  "https://api.finage.co.uk/search/currency/{ key }?limit={ limit }&apikey=YOUR_API_KEY";
const searcOnUsMarket =
  "https://api.finage.co.uk/search/market/{ market }/{ key }?limit={ limit }&apikey=ВАШ_API_KEY";

export const getFinData = async () => {
  const symbol = "aapl";
  //   const BASE_URL = `https://api.finage.co.uk/detail/currency/${symbol}`;
  const BASE_URL = `https://api.finage.co.uk/last/stock/${symbol}`;
  const params = {
    apikey: API_KEY,
  };

  const response = await axios.get(BASE_URL, { params });
  const data = await response.data;

  return data;
};

const result = getFinData();

result
  .then((result) => {
    const markup = `<img src="${result.from_flag}" alt="">`;
    console.log(result.from_flag);
    container.insertAdjacentHTML("beforeend", markup);
  })
  .then((result) => {
    //   const markup = `<img src="${result.from_flag}" alt="">`;
    //   container.insertAdjacentHTML("beforeend", markup);
  });
