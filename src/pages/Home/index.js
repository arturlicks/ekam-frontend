import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { NextRace } from "../../components/NextRace";
import { ScoreTable } from "../../components/ScoreTable";
import { BiggestCrashers } from "../../components/BiggestCrashers";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <NextRace />
      <ScoreTable />
      <BiggestCrashers />
    </div>
  );
}

export default App;
