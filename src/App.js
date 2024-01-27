import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  return (
    <div className="App">
      <p>{cash}</p>
    </div>
  );
}

export default App;
