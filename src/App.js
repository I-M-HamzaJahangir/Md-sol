import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import WhoWeAre from "./Components/WhoWeAre";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <WhoWeAre />
      <Services />
    </div>
  );
}

export default App;
