import ChampionshipResults from "../../components/ChampionshipResults"
import Layout from "../../components/Layout"
import { NextRace } from "../../components/NextRace"

function Home() {
  return (
    <div className="App">
      <Layout>
        <NextRace />
      </Layout>
      <ChampionshipResults />
    </div>
  )
}

export default Home