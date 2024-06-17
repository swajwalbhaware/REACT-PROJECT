import {Input} from "./components";
import React, { useState } from 'react';
import Usecurr from "./hooks/usecurr";
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convAmt, setConvAmt] = useState(0)
  const currinfo = Usecurr(from)
  const options = Object.keys(currinfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvAmt(amount)
    setAmount(convAmt)
  }
  const convert = ()=>{
    setConvAmt(amount * currinfo[to])
  }
    return (
      <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:`url("https://c8.alamy.com/comp/2A9YH9M/currency-converter-us-dollar-and-indian-rupee-usdinr-currency-exchange-on-computer-screen-2A9YH9M.jpg")`,
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
              <Input 
              label="From"
              amount={amount} 
              currencyOptions={options}
              onCurrencyChange={(currency)=> setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount)=>setAmount(amount)}
  />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap} > 
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input 
              label="To" 
              amount={convAmt} 
              currencyOptions={options}
              onCurrencyChange={(currency)=> setTo(currency)}
              selectCurrency={to}
              amountDisable
              />
            </div>
            <button
              type="submit"
              onClick={convert}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
    );
  }
  export default App;