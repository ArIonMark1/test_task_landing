export const getPrice = async () => {
  const request = axios.get(
    "https://api.finage.co.uk/last/stock/AAPL?apikey=YOUR_API_KEY"
  );

  console.log(request);
};
