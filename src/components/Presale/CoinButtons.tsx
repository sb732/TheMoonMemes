import { CoinData } from "@/utils/type";

interface coinButtonsPropsType {
  coin: CoinData;
  selectedCoin: CoinData;
  setSelectedCoin: (coin: CoinData) => void;
}

const CoinButtons = ({
  coin,
  selectedCoin,
  setSelectedCoin,
}: coinButtonsPropsType) => {
  return (
    <p
      className={`border-[1px] rounded-md flex py-2 px-4 text-lg items-center cursor-pointer border-white ${
        coin === selectedCoin ? "bg-green-600" : ""
      }`}
      onClick={() => setSelectedCoin(coin)}
    >
      <img
        src={`/assets/images/coins/${coin.symbol}`}
        className="w-6 h-6 mr-1"
        alt=""
      />
      {coin.name}
    </p>
  );
};

export default CoinButtons;
