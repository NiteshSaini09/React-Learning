import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  let BackgroundImage =
    "https://static.vecteezy.com/system/resources/previews/011/301/101/original/global-currency-exchange-foreign-currency-on-globe-with-network-connecting-digital-finance-and-banking-trading-with-secure-innovation-technology-in-space-futuristic-background-vector.jpg";
  let [amount, setAmount] = useState();
  let [currency, setCurrency] = useState("usd");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div className="flex w-full h-screen bg-blue-950">
      <div className="w-1/2 border flex gap-10 flex-col flex-wrap justify-center items-center bg-cover">
        <h1 className="text-2xl bold text-red-700">Convert Currency</h1>
        <p className="tracking-[2px]">{from.toUpperCase()} to {to.toUpperCase()}</p>
        <h1 className="text-4xl">Amount: {convertedAmount}</h1>
      </div>
      <div
        className="w-1/2 flex flex-wrap  justify-center items-center bg-cover bg-no-repeat bg-transparent"
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setAmount(amount);
                    setFrom(currency);
                  }}
                  selectCurrency={from}
                  className="text-black"
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDesable
                  className="text-black"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
