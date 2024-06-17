import React,{useId} from 'react'

//label=>it tells what currency name user is paasing 
//amount->We know the amount used while inserting
//onAmountChange=>this is bcz if amt is changing then we have the change the state of it& by this we r controlling the i/p
//onCurrencyChange=>this is bcz if currency is changing then we have the change the state of it& by this we r controlling the i/p
//currencyOptions=>By this we'll get all the currency options in the form of array
//selectCurrency=>By this we can select which currency we want to select(Bydfault is USD)
//amountDisable=>This is for if user don't want to give any amount
//currencyDisable=>This is for if user don't want to give any currency
//classname=>will help in tailwind by which we can inject tailwind

function Input({
    label,
    amount, 
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className="",
}) 
{
    const amountInputId = useId()
     return (
         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
             <div className="w-1/2">
                 <label htmlFor={amountInputId}
                   className="text-black/40 mb-2 inline-block">
                     {label}
                 </label>
                 <input
                 id={amountInputId}
                     className="outline-none w-full bg-transparent py-1.5"
                     type="number"
                     placeholder="Amount"
                     disabled={amountDisable}
                     value={amount}
                     onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                 />
             </div>
             <div className="w-1/2 flex flex-wrap justify-end text-right">
                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
                 <select
                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                     value={selectCurrency}
                     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                     disabled={currencyDisable}
                 >
                        
                         {currencyOptions.map((currency) => (
                             <option key={currency} value={currency}>
                             {currency}
                             </option>
                         ))}
                 
                 </select>
             </div>
         </div>
     );
 }
export default Input;