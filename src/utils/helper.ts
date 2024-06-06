export const ConvertTimestampToStringDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toUTCString();
};

export const shortenAddress = (address: string, chars: number) => {
  if (address) return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};
