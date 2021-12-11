import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
