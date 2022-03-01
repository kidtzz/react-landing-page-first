import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Footer />
        </div>
    );
}

export default App;
