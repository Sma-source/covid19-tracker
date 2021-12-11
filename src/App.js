import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [covidData, setCovidData] = useState([]);
  const url = "https://covid19.mathdro.id/api";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        const mData = {
          confirmed: data.confirmed,
          recovered: data.recovered,
          deaths: data.deaths,
        };
        console.log(mData);
        setCovidData(mData);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      <Cards covidData={covidData} />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
