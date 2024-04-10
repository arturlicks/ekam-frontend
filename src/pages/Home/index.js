import Layout from "../../components/Layout";
import { NextRace } from "../../components/NextRace";
import { ScoreTable } from "../../components/ScoreTable";
import { BiggestCrashers } from "../../components/BiggestCrashers";
import "./styles.css";

function Home() {
  return (
    <div className="App">
      <Layout>
        <NextRace />
        <div className="container">
          <ScoreTable />
          <BiggestCrashers />
        </div>
      </Layout>
    </div>
  );
}

export default Home;
