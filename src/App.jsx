import { useSelector, useDispatch } from "react-redux";
import { Deposite, Withdraw } from "../src/Redux/Slicer";
import "./App.css";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.bank.value);
  const [amount, setAmount] = useState("");

  return (
    <>
      <h1>Balance: {balance}</h1>
      <div className="input">
        <label htmlFor="amount">Enter Money Amount</label>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => dispatch(Withdraw(+amount))}>Withdraw</button>
        <button onClick={() => dispatch(Deposite(+amount))}>Diposite</button>
      </div>
    </>
  );
}

export default App;
