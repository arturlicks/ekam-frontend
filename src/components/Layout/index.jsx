import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <div style={{ paddingBottom: 20 }}> </div>
      {children}
    </>
  );
}

export default Layout;