import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD-CASH", payload: cash });
  };
  function withdrawCash(cash) {
    dispatch({ type: "WITHDRAW-CASH", payload: cash });
  }
  return (
    <div className="App">
      <p>{cash}</p>
      <button onClick={() => addCash(Number(prompt()))}>Add Money</button>
      <button onClick={() => withdrawCash(Number(prompt()))}>
        Withdraw Money
      </button>
    </div>
  );
}

export default App;
