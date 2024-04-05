import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { NextRace } from "../../components/NextRace";
import { ScoreTable } from "../../components/ScoreTable";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <NextRace />
      <ScoreTable />
    </div>
  );
}

export default App;
