import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { NextRace } from "../../components/NextRace";
import { ScoreTable } from "../../components/ScoreTable";
import { BiggestCrashers } from "../../components/BiggestCrashers";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <NextRace />
      <div className="container">
        <ScoreTable />
        <BiggestCrashers />
      </div>
    </div>
  );
}

export default App;
