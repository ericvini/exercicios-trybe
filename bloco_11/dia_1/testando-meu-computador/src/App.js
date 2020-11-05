
import './App.css';

const task = (value) => {
  return (
    <h5>{value}</h5>
  );
}
function App() {
  const list =['tomar banho','correr','cozinhar'];
  return (
    list.map(list=>task(list))
  );
}

export default App;
