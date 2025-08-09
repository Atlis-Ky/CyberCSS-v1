import DemoList from "./components/DemoList";
import NavBar from "./components/NavBar";
import ContextCard from "./components/ContextCard";
import "./styles/cyber.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ContextCard />
      <DemoList />
      <Footer />
    </>
  );
}

export default App;
