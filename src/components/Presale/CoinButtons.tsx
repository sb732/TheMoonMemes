interface coinButtonsPropsType {
  coin: string;
}

const CoinButtons = ({ coin }: coinButtonsPropsType) => {
  return (
    <p className="border-[1px] border-white rounded-md flex py-2 px-4 text-xs">
      {coin === "ETH" && (
        <img src="/assets/images/coins/ethereum.png" className="w-4 h-4 mr-1" />
      )}
      {coin === "BNB" && (
        <img src="/assets/images/coins/bnb 2.png" className="w-4 h-4 mr-1" />
      )}
      {coin === "USDT" && (
        <img src="/assets/images/coins/usdt.png" className="w-4 h-4 mr-1" />
      )}
      {coin}
    </p>
  );
};

export default CoinButtons;
