import { displayCoins } from "./displayCoins";
export const getCoins = async (keyword) => {
  const API_KEY = "coinrankingaaf6d490b2b7831736a1d0f05afcc5a4e9fc2b113ac5b0aa";
  const URL = `https://api.coinranking.com/v2/coins?search=${keyword}`;
  const options = {
    headers: {
      "x-access-token": API_KEY,
    },
  };

  try {
    const res = await fetch(URL, options);
    const json = await res.json();
    console.log(json);
    if (!json.data.coins[0]) {
      alert("Coin can not be found");
    } else {
      displayCoins(json.data.coins[0]);
    }
  } catch (error) {
    console.log(error);
  }
};


