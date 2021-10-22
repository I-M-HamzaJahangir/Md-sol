import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import WhoWeAre from "./Components/WhoWeAre";
import Services from "./Components/Services";
import RecentWork from "./Components/RecentWork";
import ImageGallery from "./Components/ImageGallery";

function App() {
  return (
    <div className="App">
      <Header />
      <WhoWeAre />
      <Services />
      <RecentWork />
      <ImageGallery />
    </div>
  );
}

export default App;
